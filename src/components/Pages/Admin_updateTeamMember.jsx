import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import user from '../Basic components/icon/user.png'
import LinkedIcon from '../Basic components/icon/linkedin-fill.png'
import emailIcon from '../Basic components/icon/mail-line.png'

const Admin_updateTeamMember = () => {
    const [formData, setFormData] = useState({
        imageSrc: "",
        name: "",
        designation: "",
        email: "",
        linkedIn: "",
        order: 0,
    });

    const { authorizationToken, hostLink, fetchTeamMembers } = useAuth();
    const navigate = useNavigate();
    const params = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const fetchMember = async (req, res) => {
        try {
            const response = await fetch(`${hostLink}/team/${params.id}`, {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken,
                }
            });
            const res_data = await response.json();
            if (response.ok) {
                setFormData(res_data);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMember();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${hostLink}/team/update/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(formData)
            });

            const res_data = await response.json();
            console.log(response);


            if (response.ok) {
                setFormData({ imageSrc: '', name: '', designation: '', email: '', linkedIn: '', order: 0 });
                toast.success(res_data.message);
                navigate('/adminpage/ourteam')
                fetchTeamMembers();
            } else {
                toast.error(res_data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between items-center w-full'>
                    <div className='text-2xl font-bold '>Add New Member</div>
                    <Link to='/adminpage/ourteam'>
                        <button className=" py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700">
                            Back
                        </button>
                    </Link>
                </div>

                <div className='w-full flex justify-center items-center my-6'>
                    <div className='flex flex-col justify-center items-center bg-slate-100 w-[230px] rounded-[10px] p-4 gap-2'>
                        <div className='pb-4'>
                            <img src={formData.imageSrc ? formData.imageSrc : user} alt={formData.name} className='w-[130px] h-[130px] rounded-full' />
                        </div>
                        <div className='text-2xl font-bold text-center'>{formData.name ? formData.name : "Name"}</div>
                        <div className='text-md text-center font-semibold'>{formData.designation ? formData.designation : "Designation"}</div>
                        <div className='flex gap-3'>
                            <a href={formData.linkedIn} target='_blank' rel='noopener noreferrer'>
                                <img src={LinkedIcon} alt='LinkedIn' className='w-[20px] h-[20px]' />
                            </a>
                            <a href={`mailto:${formData.email}?subject=Support%20Request&body=Hello,%20I%20need%20help%20with...`}>
                                <img src={emailIcon} alt='Email' className='w-[20px] h-[20px]' />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full  mx-auto p-6 bg-white rounded-lg shadow-lg">
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Order Number:</span>
                            <input
                                type="text"
                                name="order"
                                value={formData.order}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Image URL:</span>
                            <input
                                type="text"
                                name="imageSrc"
                                value={formData.imageSrc}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Name:</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Designation:</span>
                            <input
                                type="text"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">Email:</span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <label className="mb-4">
                            <span className="block text-sm font-medium text-gray-700">LinkedIn URL:</span>
                            <input
                                type="text"
                                name="linkedIn"
                                value={formData.linkedIn}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </label>
                        <div className='w-full text-right'>
                            <button type="submit" className="mt-4 w-[100px] bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                                Update
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Admin_updateTeamMember