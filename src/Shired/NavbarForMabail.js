import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import logo from "../Images/logo.png"
import { TfiAlignRight } from "react-icons/tfi";
import { FaAlignLeft } from 'react-icons/fa';
const NabbarForMabail = () => {
     const [user] = useAuthState(auth);
     let navItems=<>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 '><NavLink  to="/">Home</NavLink></li>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/trams-and-condition">Terms and Condition</NavLink></li>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/qna">QNA</NavLink></li>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/about">About US</NavLink></li>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/contact">Contact US</NavLink></li>
     <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/deshboard">Deshboard</NavLink></li>
     </>
     return (
          <div className=' lg:hidden'>
          <h1 className='  bg-primary p-1 font-semibold text-center text-white sm:text-xl text-xs'>For Any Query, Please Call: +8801949480806</h1>
     <div className="flex justify-between bg-white border-b-4 border-primary ">
     <div className="ml-4">
     <NavLink to="/" className="btn btn-ghost normal-case text-xl logo "><img className='h-12 w-28' src={logo} alt="logo" /></NavLink>
     </div>
       <div className="flex justify-end">
    <div className="dropdown dropdown-bottom dropdown-end">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
          <i className='font-bold'><FaAlignLeft className='text-2xl font-extrabold rotate-180'/></i>
      
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48 border border-primary border-opacity-30 mr-3">
{navItems}
{user?<li></li>:<li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'> <NavLink to="/login">Login</NavLink></li>}
      </ul>
    </div>
{/*  
    <ul className="menu menu-horizontal px-1">
    {navItems}
    {user?<li></li>:<li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'> <NavLink to="/login">Login</NavLink></li>}
    </ul> */}
 
 

</div>
     </div>
          </div>
     );
};
export default NabbarForMabail;