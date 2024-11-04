import React, { useEffect, useState } from 'react';
import LinkedIcon from '../Basic components/icon/linkedin-fill.png';
import emailIcon from '../Basic components/icon/mail-line.png';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Adminteam = () => {

  const { teamMembers, authorizationToken, fetchTeamMembers, hostLink } = useAuth();
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${hostLink}/team/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const res_data = await response.json();
      console.log(res_data);

      if (response.ok) {
        fetchTeamMembers()
        toast.success(res_data.message);
      } else {
        toast.error(res_data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <>
      <div className='w-full'>
        <div className='flex justify-between items-center gap-4 mb-7'>
          <div>
            <div className='text-2xl font-bold'>Our Team</div>
            <div className='text-md font-bold'>Total Team Members: {teamMembers.length} </div>
          </div>
          <div className='flex gap-4'>
            <button
              className='bg-green-700 text-white px-5 py-2 text-[17px] rounded-[25px] font-bold'
              onClick={fetchTeamMembers}
            >
              Refresh
            </button>
            <Link to='/adminpage/addteammember'>
              <button className='bg-pink-600 text-white px-5 py-2 text-[17px] rounded-[25px] font-bold'>
                Add Member
              </button>
            </Link>
          </div>
        </div>

        <div className='w-full flex flex-wrap gap-8'>
          {teamMembers.map((data, index) => (
            <div>
              <div key={index} className='flex flex-col justify-center items-center bg-slate-100 w-[230px] rounded-[10px] p-4 gap-2'>
                <div className='pb-4'>
                  <img src={data.imageSrc} alt={data.name} className='w-[130px] h-[130px] rounded-full' />
                </div>
                <div className='text-2xl font-bold text-center'>{data.name}</div>
                <div className='text-md text-center font-semibold'>{data.designation}</div>
                <div className='flex gap-3'>
                  <a href={data.linkedIn} target='_blank' rel='noopener noreferrer'>
                    <img src={LinkedIcon} alt='LinkedIn' className='w-[20px] h-[20px]' />
                  </a>
                  <a href={`mailto:${data.email}?subject=Support%20Request&body=Hello,%20I%20need%20help%20with...`}>
                    <img src={emailIcon} alt='Email' className='w-[20px] h-[20px]' />
                  </a>
                </div>
              </div>
              <div className='flex pt-3 gap-2 w-full justify-end'>
                <Link to={`/adminpage/updateteammember/${data._id}`}>
                <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-150'>
                  EDIT
                </button>
                </Link>
                <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150' onClick={() => handleDelete(data._id)}>
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Adminteam;
