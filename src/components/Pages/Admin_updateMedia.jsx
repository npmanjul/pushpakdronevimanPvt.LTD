import React, { useEffect, useState } from 'react'
import dummyImg from '../Basic components/img/dummy.png';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import GalleryImg from '../Basic components/GalleryImg';

const Admin_updateMedia = () => {
    const [formData, setFormData] = useState({
        photoSrc: "",
        heading: "",
        subTitle: ""
    });

    const { authorizationToken,hostLink } = useAuth();
    const params=useParams();
    const Navigate=useNavigate();

    const getMediaDataById=async ()=>{
        try {
            const response = await fetch(`${hostLink}/media/gallery/${params.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken,
                },
            });

            const res_data = await response.json();
            console.log(response);

            if (response.ok) {
                setFormData({ photoSrc: res_data.photoSrc, heading: res_data.heading, subTitle: res_data.subTitle });
            } else {
                toast.error(res_data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response=await fetch(`${hostLink}/media/gallery/update/${params.id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type': 'application/json',
                    Authorization:authorizationToken,
                },
                body:JSON.stringify(formData),
            });

            const res_data=await response.json();

            if(response.ok){
                toast.success(res_data.message);
                setFormData({photoSrc:"",heading:"",subTitle:""});
                Navigate('/adminpage/media');
            }else{
                toast.error(res_data.message);
            }
        }catch(err){    
            console.log(err);
        }
    };

    useEffect(() => {
        getMediaDataById();
    },[]);

  return (
    <>
            <div className='w-full flex justify-between items-center'>
                <div className='text-2xl font-bold mx-5 my-2'>Preview</div>
                <Link to='/adminpage/media'>
                <button className=" py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow hover:bg-red-700">
                    Back
                </button>
                </Link>
                
        </div>
            <div className='w-full flex justify-center items-center'>
                <GalleryImg imgSrc={formData.photoSrc? formData.photoSrc:dummyImg} headingSrc={formData.heading} subheadingSrc={formData.subTitle} />
            </div>
            <div className='w-full h-full'>
                <div className=" mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Photo Source Input */}
                        <div>
                            <label htmlFor="photoSrc" className="block text-sm font-medium text-gray-700">
                                Photo Link
                            </label>
                            <input
                                type="text"
                                id="photoSrc"
                                name="photoSrc"
                                value={formData.photoSrc}
                                onChange={handleChange}
                                placeholder="Enter the photo source link"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Heading Input */}
                        <div>
                            <label htmlFor="heading" className="block text-sm font-medium text-gray-700">
                                Heading
                            </label>
                            <input
                                type="text"
                                id="heading"
                                name="heading"
                                value={formData.heading}
                                onChange={handleChange}
                                placeholder="Enter the heading"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Subtitle Input */}
                        <div>
                            <label htmlFor="subTitle" className="block text-sm font-medium text-gray-700">
                                Subtitle
                            </label>
                            <input
                                type="text"
                                id="subTitle"
                                name="subTitle"
                                value={formData.subTitle}
                                onChange={handleChange}
                                placeholder="Enter the subtitle"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='w-full text-right'>
                            <button
                                type="submit"
                                className=" py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 "
                            >
                                Add Image
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Admin_updateMedia