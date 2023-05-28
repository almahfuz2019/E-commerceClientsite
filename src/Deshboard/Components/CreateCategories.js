import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import ManageCatagory from './ManageCatagory';
const CreateCategories = () => {
     const handleCatagory=async(event)=>{
     event.preventDefault();
     const catagory=event.target.findClass.value;
     const catagoryData={catagory};
      await axios.post("http://localhost:5000/catagory",catagoryData)
      toast.success('Addedd Successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
       event.target.reset();
     }
     return (
          <>
     <div className='sm:mx-10 mx-2 mt-10'>
    <div className='border p-2 border-primary border-2 rounded-lg'>
    <h2 className='font-bold text-xl sm:text-3xl'>Create a Category</h2>
     <form  onSubmit={handleCatagory} >
     <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Category Name</label>
        <input required placeholder='Type here' type="text"  name="findClass" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  <input type="submit" className="btn btn-primary sm:btn-md btn-sm" value="submit"/>
</form>   
    </div>
          </div>
<br />
<ManageCatagory/>
          </>
     );
};
export default CreateCategories;