import React from 'react'
import Blankspace from './../Basic components/Blankspace';
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../../Store/auth';

const AdminPage = () => {
  const {adminAccess}=useAuth();

  if(!adminAccess){
    return <Navigate to='/' />
  }
  
  return (
    <>
      <Blankspace />
      <div className='flex flex-row'>
        <div className='w-[15%] h-[87vh] bg-green-700 flex justify-start items-start flex-col p-4 gap-4 overflow-hidden'>

          <NavLink to='/adminpage/user' className='w-full bg-green-600 rounded-[10px] px-3 py-2 text-white font-bold cursor-pointer'>
              <div>User</div>
          </NavLink>
          <NavLink to='/adminpage/user-message' className='w-full bg-green-600 rounded-[10px] px-3 py-2 text-white font-bold cursor-pointer'>
              <div>Messages</div>
          </NavLink>
          <NavLink to='/adminpage/media' className='w-full bg-green-600 rounded-[10px] px-3 py-2 text-white font-bold cursor-pointer'>
              <div>Media</div>
          </NavLink>

        </div>
        <div className=' w-full'>
          <div className=' h-[87vh] flex justify-start items-start flex-col p-4 gap-4 overflow-y-auto'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminPage