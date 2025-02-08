import React, { useState } from 'react'
import './SignupPage.css'
import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
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

    const handleSubmit =async (e) => {
        e.preventDefault();

        try{
            const response=await fetch(`${hostLink}/auth/signup`,{
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
                setFormData({username:'',email:'',phone:'',password:''});
                toast.success(res_data.msg);
                Navigate('/');
            }
            else{
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
            }
        }catch(err){
            console.log("register error",err);
        }
    };

    return (
        <>
            <div className='signup-wrapper'>
                <div className="signup-container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>

                    <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                       
                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className='submit-btn'>Sign Up</button>
                    </form>
                    <div className='signup-or-container'> Already have an account? <Link to="/login" className='text-blue-700 hover:text-blue-800 underline'>Login</Link></div>
                </div>
            </div>
        </>
    )
}

export default SignupPage