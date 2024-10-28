import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const Admin_user_update = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    username: "",
    email: "",
    Phone: "",
    isAdmin:"",
  });
  
  const params=useParams();
  const { authorizationToken,hostLink } = useAuth();
  const Navigate=useNavigate();
  
  const handleChange = (e) => {
    setUpdateUser({
      ...updateUser,
      [e.target.name]: e.target.value,
    });
    setIsChecked(e.target.checked);
    setUpdateUser({
      ...updateUser,
      isAdmin: e.target.checked,
    });
    
  };

  const getUserData=async ()=>{
    try{
      const response=await fetch(`${hostLink}/admin/user/${params.id}`,{
        method:'GET',
        headers:{
          Authorization:authorizationToken,
        }
      });

      const res_data=await response.json();

      if(response.ok){
        setUpdateUser(res_data.userData);
        setIsChecked(res_data.userData.isAdmin);
      }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getUserData();
  },[]);

  const handleSubmit =async (e) => {
    e.preventDefault();

    try{
      const response=await fetch(`${hostLink}/admin/user/update/${params.id}`,{
        method:'PATCH',
        headers:{
          'Content-Type': 'application/json',
          Authorization:authorizationToken,
        },
        body:JSON.stringify(updateUser),
      });
      const res_data=await response.json();

      if(response.ok){
        Navigate('/adminpage/user');
        toast.success(res_data.message);
      }else{
        toast.error(res_data.message);
      }
    }catch(err){
      console.log(err); 
    }
    
  }




  return (
    <>
      <div className='w-full '>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
              User Updation Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  value={updateUser.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={updateUser.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={updateUser.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>Admin</div>
              <label className="relative inline-flex items-center cursor-pointer">
              
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all duration-300"></div>
                <div className="absolute w-5 h-5 bg-white rounded-full left-0.5 top-0.5 peer-checked:translate-x-6 transition-transform duration-300"></div>
              </label>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin_user_update