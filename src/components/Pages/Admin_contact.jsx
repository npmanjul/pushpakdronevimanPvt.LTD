import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const Admin_contact = () => {
    const [contacts, setContacts] = useState([]);
    const { authorizationToken,hostLink } = useAuth();

    const fetchContacts = async () => {
        try {
            const response = await fetch(`${hostLink}/admin/contacts`,{ 
                method:'GET',
                headers:{
                    Authorization: authorizationToken,
                }
            });
            const res_data = await response.json();
            setContacts(res_data);
        } catch (err) {
            console.log("error in fetching contacts", err);
        }
    }

    const deleteMessage = async (id) => {
        try {
            const response = await fetch(`${hostLink}/admin/contacts/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const res_data = await response.json();
            console.log(res_data);

            if(response.ok){
                toast.success(res_data.message);
                fetchContacts();
            }else{
                toast.error(res_data.message);
            }
        } catch (err) {
            console.log("error in deleting contact", err);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    console.log(contacts);
    return (
        <>
            <div className="flex items-start p-4 justify-center max-h-[100vh] w-full">
                <div className="w-full">
                    <div className="mb-6 w-full flex justify-between items-center">
                        <div>
                            <h2 className="text-2xl font-bold ">Messages</h2>
                            <div>Total Messages: {contacts.length}</div>
                        </div>
                        <div>
                            <button className='bg-green-500 text-white px-3 py-2 text-[18px] rounded  w-[120px]' onClick={fetchContacts}>Refresh</button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className='bg-green-700 text-wpx] font-semibold text-white'>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Name</th>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Email</th>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Address</th>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Phone</th>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Message</th>
                                    <th className="px-6 py-3  uppercase tracking-wider text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    contacts.map((contact, index) => {
                                        return (
                                            <tr key={index} className=" text-center bg-green-600 border-b border-slate-300 text-slate-100 font-semibold">
                                                <td className="px-6 py-4 ">{contact.username}</td>
                                                <td className="px-6 py-4 ">{contact.email}</td>
                                                <td className="px-6 py-4 ">{contact.address}</td>
                                                <td className="px-6 py-4 ">{contact.phone}</td>
                                                <td className="px-6 py-4 ">{contact.message}</td>
                                                <td className="px-6 py-4 ">
                                                    <button
                                                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                                                        onClick={()=>deleteMessage(contact._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin_contact