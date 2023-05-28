import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const UpdateCoupon = () => {
     const[item,setItem]=useState([]);
    const { id } = useParams();
useEffect(()=>{
     const url=`http://localhost:5000/coupon/${id}`
     fetch(url)
     .then(res=>res.json())
     .then(data=>setItem(data))
    
},[])
const handleNameChange = e => {
     const updateName = e.target.value;
     const updateNameFinal = { catagory: updateName };
     setItem(updateNameFinal);
     
 }
 const handleUpdateProduct = e => {
     const url = `http://localhost:5000/coupon/${id}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(item)
     })
         .then(res => res.json())
         .then(data => {
          toast.success('Update Successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });
                 e.target.reset();
         })
     e.preventDefault();
 } 
     return (
          <div>
            <form onSubmit={handleUpdateProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary border border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Update Coupon</h2>
      
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={item.catagory} onChange={handleNameChange}/>
      </div>
     
      <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="save" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};
export default UpdateCoupon;