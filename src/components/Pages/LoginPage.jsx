import React, { useState } from 'react'
import './LoginPage.css'
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const Navigate=useNavigate();
  const {storeTokenInLS,hostLink}=useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response=await fetch(`${hostLink}/auth/login`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData)
      })

      const res_data=await response.json();
      console.log(res_data);

      if(response.ok){
        storeTokenInLS(res_data.token);
        setFormData({email:'',password:''});
        toast.success(res_data.message);
        Navigate('/');
      }
      else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    }catch(err){
      console.log("login error",err); 
    }
  }

  return (
    <>
      <div className='login-wrapper'>
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className='submit-btn'>Login</button>
          </form>
          <div className='or-container'>Don't have an account? <Link to="/signup" className='text-blue-700 hover:text-blue-800 underline'>Sign Up</Link></div>
        </div>
      </div>
    </>
  )
}

export default LoginPage