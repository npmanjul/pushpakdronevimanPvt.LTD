import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Store/auth';
import { toast } from 'react-toastify';

const Adminmedia = () => {
  const { galleryData ,authorizationToken,fetchGalleryData,hostLink} = useAuth();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${hostLink}/media/gallery/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
      });

      const res_data = await response.json();

      if (response.ok) {
        fetchGalleryData();
        toast.success(res_data.message);
      } else {
        toast.error(res_data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='w-full h-full'>
        <div className='mb-6 w-full flex justify-between items-center'>
          <div>
            <div className='text-2xl font-bold'>Media</div>
            <div className='text-[17px]'>Total Media:{galleryData.length}</div>
          </div>
          <div className='flex gap-4'>
              <button className='bg-green-700 text-white px-5 py-2 text-[17px] rounded-[25px] font-bold' onClick={fetchGalleryData} >Refresh</button>
            <Link to='/adminpage/media/addmedia'>
              <button className='bg-blue-700 text-white px-5 py-2 text-[17px] rounded-[25px] font-bold' >Add Photo</button>
            </Link>
          </div>
        </div>
        <div className='w-full flex flex-wrap gap-8 max-w-1200px'>

          {galleryData.map(function (data) {
              return (
                <>
                <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-4 w-[400px]  my-8 mx-auto h-auto gap-4">
                  <img
                    src={data.photoSrc}
                    alt="Card Image"
                    className="h-[250px] w-full rounded-lg object-cover "
                  />

                  <div className="flex-grow ">
                    <h2 className="text-2xl font-semibold text-gray-800">{data.heading}</h2>
                    <p className="text-gray-600  mt-3">{data.subTitle}</p>
                  </div>
                  <div className="flex space-x-2 w-full">
                    <Link to={`/adminpage/update/${data._id}`}>
                    <button
                      className="bg-blue-500 h-[40px] text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-150"
                    >
                      Edit
                    </button>
                    </Link>
                      <button
                        className="bg-red-500 h-[40px] text-white px-3 py-1 rounded hover:bg-red-600 transition duration-150"
                        onClick={() => handleDelete(data._id)}
                      >
                        Delete
                      </button>
                  </div>
                </div>
                </>
              )
          
            }
          )
          }
         
        </div>
      </div>

    </>
  )
}

export default Adminmedia