import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Admin_user = () => {

    const [users, setUsers] = useState([]);
    const { authorizationToken,hostLink } = useAuth();

    const fetchUsers = async () => {
        try {
            const response = await fetch(`${hostLink}/admin/users`,{
               method:'GET',
               headers:{
                   Authorization: authorizationToken,
               },
            });
            const res_data = await response.json();
            if(response.ok){
                setUsers(res_data);
            }else{
                toast.error(res_data.message);
            }
        } catch (err) {
            console.log("error in fetching users", err);
        }
    }

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${hostLink}/admin/users/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const res_data = await response.json();

            if(response.ok){
                toast.success(res_data.message);
                fetchUsers();
            }else{
                toast.error(res_data.message);
            }
        } catch (err) {
            console.log("error in deleting user", err);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
            <div className='font-bold text-2xl w-full flex justify-between items-center'>
                <div>
                    <div>Registered Users</div>
                    <div className='text-[17px]'>Total Users: {users.length}</div>
                </div>
                <div>
                    <button className='bg-green-500 text-white px-3 py-1 text-[18px] rounded  w-[120px]' onClick={fetchUsers}>Refresh</button>
                </div>
            </div>
            <div className='w-full'>
                <table className="min-w-full bg-green-600  border border-gray-300">
                    <thead>
                        <tr className="bg-green-700 text-white">
                            <th className="p-3 border-b">ID</th>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Email</th>
                            <th className="p-3 border-b">Phone</th>
                            <th className="p-3 border-b">Admin</th>
                            <th className="p-3 border-b">Action</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index} className='text-center text-white' >
                                    <td className="p-3 border-b">{index + 1}</td>
                                    <td className="p-3 border-b">{user.username}</td>
                                    <td className="p-3 border-b">{user.email}</td>
                                    <td className="p-3 border-b">{user.phone}</td>
                                    <td className="p-3 border-b">{user.isAdmin ? "Yes" : "No"}</td>
                                    <td className="p-3 border-b ">
                                        <div className='flex justify-center items-center gap-5 '>
                                            <Link to={`/adminpage/user-update/${user._id}`}>
                                            <button
                                                className="bg-yellow-300 text-black px-4 py-2 rounded mr-2 w-[100px] hover:bg-yellow-400"
                                                
                                            >
                                                Edit
                                            </button>
                                            </Link>
                                            <button
                                                className="bg-black text-white px-4 py-2 rounded  w-[100px] hover:bg-gray-700"
                                                onClick={()=>deleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default Admin_user