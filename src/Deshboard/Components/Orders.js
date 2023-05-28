import React, { useEffect, useState } from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import Loading from '../../Components/Loading';
import axios from 'axios';

const Orders = () => {
   const [count,setCount]=useState([]);
   const [search,setSearch]=useState("");
  const[page,setPage]=useState(0);
const[size,setSize]=useState(50);
  const[pageCount,setPageCount]=useState(0);
  const[orders,setOrders]=useState([]);
  const[orderLoading,setOrderLoading]=useState(true);
  // get all orders with pagination 
    const loadOrders = async() => {
    try{
      // productsorders
      setOrderLoading(true)
      const response=await axios.get(`http://localhost:5000/productsorders?page=${page}&size=${size}`,{
        headers: {
          'content-type': 'application/json',
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
       
      }
      })
      setPageCount(Math.ceil(response.data.count/size))
          setOrders(response.data.products)
        setOrderLoading(false)
      }
      catch(error){
      };
    }
  useEffect(()=>{
    loadOrders()
  },[page,size])
  const handleOrderDelete=async(id)=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
         await axios.delete(`http://localhost:5000/itemorderdelete/${id}`)
         .then(response=>{
          if(response.data.deletedCount>0){
               const deletedremaining=orders.filter(note=>note._id !==id);
               setOrders(deletedremaining)
          }
     })
    }
}
  useEffect(()=>{
    fetch("http://localhost:5000/orderscount")
    .then(res=>res.json())
    .then(data=>setCount(data))
  },[count])
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  useEffect(()=>{
    const url=`http://localhost:5000/ordersearch?email=${search}`;
    
    if(search!==""){
    
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setOrders(data)
    
        setPageCount(Math.ceil(data.length/size))
      })
    }else if(search===""){
      loadOrders()
    }
  },[search])
     if(orderLoading){
      return <Loading/>
     }
     return (
          <div>
           
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Orders: {count?.count}</span></div>
          <div className="flex  space-x-1  my-4 sm:ml-5 ml-2">
	<button title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 sm:h-8 px-1 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
		<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 px-2 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 sm:h-8 px-2 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 px-1 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
        </select>  
</div>
<div className='mx-auto text-center mb-5'>
<input type="text" placeholder="Search here by e-mail" className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary" onChange={handleSearch}/>
</div>
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Summary</th>
                <th>Action</th>
              </tr>
            </thead>
         {orders.map((order,index)=>
            <tbody key={order._id}>
              <tr className='border bg-white '>
                <th>{index+1}</th>
                <th>{order.dateAndTime}</th>
                <td>
                  {order.status==="Waiting"?
                  <button className="btn sm:btn-md bg-amber-300 btn-sm sm:loading ">Waiting</button>:
                  order.status==="Shipment"?<button className="btn sm:btn-md btn-sm disabled bg-indigo-400">Shipment</button>:
                  order.status==="Done"?<button className="btn sm:btn-md btn-sm disabled bg-green-400 ">Done</button>:
                  order.status==="Cancel"?<button className="btn sm:btn-md btn-sm disabled bg-red-400">Cancel</button>:
                  <button className="btn sm:btn-md btn-sm disabled bg-cyan-300">Confirm</button>}
                </td>
                <td>TK <span className='text-xl'>৳</span> {order?.TotalPrice} <br />
               
                </td>
   
                <td className='flex gap-3 text-2xl bg-white'>
                 
                 <Link to={`/itemorderdelete/${order._id}`}>
                 <FaEdit/>
                 </Link>
                 <Link  onClick={()=>handleOrderDelete(order._id)}>
                 <FaRegTrashAlt/>
                 </Link>
                 <Link to={`/itemorder/${order._id}`} >
                 <AiFillEye/>
                 </Link>
                </td>
              </tr>
            </tbody>
          )}
          </table>
          <div className="flex justify-center space-x-1 dark:text-gray-100 my-10">
	<button title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 px-1  rounded-md shadow-md text-primary border border-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-8 h-8 py-0 px-2 border rounded-md shadow-md btn-primary':"inline-flex items-center justify-center w-8 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 px-1 border rounded-md shadow-md border border-primary text-primary">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center w-20 h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option selected value="20">20</option>
          <option value="30">30</option>
        </select>  
</div>
        </div>
          </div>
     );
};
export default Orders;