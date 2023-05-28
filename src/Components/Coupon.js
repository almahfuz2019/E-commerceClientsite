import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ManageCopen from './ManageCopen';
import Notfound from './Notfound';
const Copen = () => {
  const [error,setError]=useState("");
     const handleCoupon=(event)=>{
     event.preventDefault();
     const category=event.target.findClass.value;
     const catagoryData={catagory: category};
     fetch('http://localhost:5000/coupon', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(catagoryData),
})
  .then((res) => res.json())
  .then((data) => {
    toast.success('Added Successfully', {
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
  })
  .catch((error) => {
    console.error('Error:', error);
  });
     }
     return (
          <>
          {error?<><Notfound/></>: 
          <>
     <div className='sm:mx-10 mx-2 mt-10'>
    <div className='border p-2 border-primary border-2 rounded-lg'>
    <h2 className='font-bold text-xl sm:text-3xl'>Create a Coupon</h2>
     <form  onSubmit={handleCoupon} >
     <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Coupon Name</label>
        <input required placeholder='Create a coupon' type="text"  name="findClass" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  <input type="submit" className="btn btn-primary sm:btn-md btn-sm" value="submit"/>
</form>   
    </div>
          </div>
<br />
<ManageCopen/>
 </>
 } 
 </>
     );
};
export default Copen;