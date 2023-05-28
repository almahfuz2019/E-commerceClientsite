import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const OrderStatusUpdate = () => {
  const navigate=useNavigate();
      const[item,setItem]=useState("");
      const { id } = useParams();
  const handleNameChange = e => {
       const updateName = e.target.value;
       setItem(updateName);
   }
   const handleUpdateProduct = async(e) => {
     e.preventDefault();
    //  orderstatusupdate
     const url = `http://localhost:5000/orderstatusupdate/${id}`;
       const res=await axios.post(url,{status:item})
       toast.success("Changed success");
       navigate("/deshboard/orders")

   } 
     return (
          <div>
        <form onSubmit={handleUpdateProduct}>
     <section className="text-gray-600 body-font relative ">
     <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary  border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0 border rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Update Status</h2>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
        <select className='select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded'  onChange={handleNameChange}>
          <option disabled>Select option</option>
          <option>Cancel</option>
          <option >Confirm</option>
          <option >Waiting</option>
          <option>Shipment</option>
          <option>Done</option>
        </select>
      </div>
      <input  className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer" value="save" type="submit"/>
      <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
  </div>
</section>
</form>
          </div>
     );
};
export default OrderStatusUpdate;