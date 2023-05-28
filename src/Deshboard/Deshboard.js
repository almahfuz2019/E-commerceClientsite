import React, { useEffect, useState } from 'react';
import { NavLink, NavNavLink, Outlet } from 'react-router-dom';
import { AiFillEye, AiOutlineAppstoreAdd, AiOutlineMail, AiOutlineUsergroupAdd } from "react-icons/ai";
import userEvent from '@testing-library/user-event';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import UseAdmin from './Hooks/UseAdmin';
import UseWorker from './Hooks/UseWorker';
import { BsInfoSquare } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import {  TbShoppingCartDiscount } from "react-icons/tb";
import axios from 'axios';
import { FaAlignLeft } from 'react-icons/fa';
const Deshboard = () => {
    const [error,setError]=useState("");
    const [user]=useAuthState(auth);
    const [admin]=UseAdmin(user);
    const [worker]=UseWorker(user);
    const [catagory,setCatagory]=useState([]);
    const [products,setProducts]=useState([]);
    const [orders,setOrders]=useState([]);
    const [contactcount,setContactcount]=useState([]);
    const [coponecount,setCoponecount]=useState([]);
    const [userscount,setUserscount]=useState([]);
    const totalUserCount = async() => {
        try{
            const response=await axios.get("http://localhost:5000/userscount")
            setUserscount(response.data)
        }catch(error){
            setError("something is wrong.Please try again")
        }
    }
    useEffect(()=>{
        totalUserCount();
    },[])

    useEffect(()=>{
        fetch("http://localhost:5000/coponecount")
        .then(res=>res.json())
        .then(data=>setCoponecount(data))

    },[coponecount])
    useEffect(()=>{
        fetch("http://localhost:5000/userscontactinfocount")
        .then(res=>res.json())
        .then(data=>setContactcount(data))

    },[contactcount])
    useEffect(()=>{
        fetch("http://localhost:5000/orderscount")
        .then(res=>res.json())
        .then(data=>setOrders(data))

    },[orders])
    useEffect(()=>{
        fetch("http://localhost:5000/allproductscount")
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[products])
    useEffect(()=>{
        fetch("http://localhost:5000/catagoycount")
        .then(res=>res.json())
        .then(data=>setCatagory(data))

    },[catagory])
   
     return (
          <>
          {/* <p>{error}</p> */}
          <div className="drawer drawer-start drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
   <div className=' text-end'>
      <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-ghost lg:hidden ">
          <i className='font-bold'><FaAlignLeft className='text-2xl font-extrabold rotate-180'/></i>
      
      </label>
   </div>
   <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60  bg-gray-800 text-base-content text-white">
    <div className="relative ">
                            <div className="text-gray-100 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <circle cx={10} cy={10} r={7} />
                                    <line x1={21} y1={21} x2={15} y2={15} />
                                </svg>
                            </div>
                            <input className=" bg-gray-500 focus:outline-none rounded w-full text-sm text-white  pl-10 py-2" type="text" placeholder="Search" />
                        </div>
                       
 
        {admin? "":<li className=' text-white bg-gray-500 mt-2 '>
       <NavLink to="#" className="flex items-center  active:bg-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Orders</span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2 '>
       <NavLink to="basic-info" className="flex items-center  active:bg-primary ">
                                <BsInfoSquare/>
                                <span className="text-sm  ml-2">Basic Info</span>
                            </NavLink></li>}
                       
       
                            {worker && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="products" className="flex items-center  active:bg-primary ">
                                <MdProductionQuantityLimits/>
                                <span className="text-sm  ml-2">Products <span className='bg-primary rounded p-2 text-white font-bold text-end'>{products.count}</span></span>
                            </NavLink></li>}
                            {worker && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="add-product" className="flex items-center  active:bg-primary ">
                                <AiOutlineAppstoreAdd/>
                                <span className="text-sm  ml-2">Add Product</span>
                            </NavLink></li>}
                            {worker && <li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="catagory" className="flex items-center  active:bg-primary ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={4} y={4} width={6} height={6} rx={1} />
                                    <rect x={14} y={4} width={6} height={6} rx={1} />
                                    <rect x={4} y={14} width={6} height={6} rx={1} />
                                    <rect x={14} y={14} width={6} height={6} rx={1} />
                                </svg>
                                <span className="text-sm  ml-2">Category <span className='bg-primary rounded p-2 text-white font-bold text-end'>{catagory.count}</span></span>
                            </NavLink></li>}
                            {admin && <li className=' text-white bg-gray-500 mt-2'>
        <NavLink to="copne" className="flex items-center  active:bg-primary">
                               <TbShoppingCartDiscount/>
                                <span className="text-sm  ml-2">Coupon <span className='bg-primary rounded p-2 text-white font-bold text-end'>{coponecount.count}</span></span>
                            </NavLink></li>}
                            {worker &&<li className=' text-white bg-gray-500 mt-2 '>
        <NavLink to="orders" className="flex items-center  active:bg-primary ">
                                <CiShoppingBasket/>
                                <span className="text-sm  ml-2">Orders <span className='bg-primary rounded p-2 text-white font-bold text-end'>{orders.count}</span></span>
                            </NavLink></li>}
                            
                            {admin &&  <li className=' text-white bg-gray-500 mt-2 '>
     <NavLink to="users" className="flex items-center  active:bg-primary ">
                                <AiOutlineUsergroupAdd/>
                                <span className="text-sm  ml-2">Users <span className='bg-primary rounded p-2 text-white font-bold text-end'>{userscount.count}</span></span>
                            </NavLink></li>}
                            {worker && <li className=' text-white bg-gray-500 mt-2 '>
     <NavLink to="contact" className="flex items-center  active:bg-primary text-white">
                                <AiOutlineMail/>
                                <span className="text-sm  ml-2">Messages <span className='bg-primary rounded p-2 text-white font-bold text-end'>{contactcount.count}</span></span>
                            </NavLink></li>}
                            
    </ul>
  
  </div>
</div>
          </>
     );
};
export default Deshboard;