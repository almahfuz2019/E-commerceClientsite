import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import logo from "../Images/logo.png"
import auth from '../firebase.init';
const Navbar = () => {
  const {usdata}=UseUserSpacifiqData();
  let total=0;
  let subTotal=0;
  if(Array.isArray(usdata)){
    for(let products of usdata){
      subTotal+=parseInt(products.product.price)*(products.productQuentity);
     
      total=subTotal;
    }
  }
  const [user, loading, error] = useAuthState(auth);
  const [signOut, SignOutLoading, SignOutError] = useSignOut(auth);
  const logout=()=>{
    signOut(auth);
    localStorage.removeItem('accessToken');
  }
  if (SignOutError || error) {
    return (
      <div>
        <p>Error: {SignOutError.message}</p>
      </div>
    );
  }
  if (SignOutLoading ||  loading) {
    return ;
  }
     let navItems=<>
     
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100 '><NavLink  to="/">Home</NavLink></li>
  
    {/* <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/qna">QNA</NavLink></li> */}
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/about">About US</NavLink></li>
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/contact">Contact US</NavLink></li>
    <li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'><NavLink  to="/trams-and-condition">Terms and Condition</NavLink></li>
   
     </>
     return (
          <div className='lg:sticky  lg:top-0 lg:z-20 hidden lg:block'>
          <h1 className='bg-primary p-1 font-semibold text-center text-white sm:text-xl text-xs'>For Any Query, Please Call: +8801915566890 </h1>
       <div className="navbar bg-white border-b-4 border-primary">
  <div className="navbar-start ">
    <div className="dropdown  ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30">
{navItems}
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost normal-case text-xl logo"><img className='h-12 w-28 ' src={logo} alt="logo" /></NavLink>
    
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    {user?<li></li>:<li className='relative font-medium  before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary before:transition hover:before:scale-100'> <NavLink to="/login">Login</NavLink></li>}
    </ul>
  </div>
 
 <div className="navbar-end flex">
  <div className="flex">
 {user? <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{usdata?.length}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow border border-primary border-opacity-30">
        <div className="card-body ">
          <span className="font-bold text-lg">{usdata?.length} Items</span>
          <span className="text-info-content flex items-center">Total Amount: <div className='flex items-center justify-center ml-1'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-2.5 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 ">{total}</p>  
              </div>  </span>
          <div className="card-actions">
            <NavLink to="view-cart" className="btn btn-primary btn-block">View cart</NavLink>
          </div>
        </div>
      </div>
    </div>:""}
   {user?  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="">
        <div className=" rounded-full ">
        <div className="avatar placeholder online animate-pulse cursor-pointer">
  <div className="bg-neutral-focus text-neutral-content rounded-full w-12  ">
    <span>{(user?.displayName?.slice(0,2))}</span>
  </div>
</div> 
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border border-primary border-opacity-30">
        
        <li><NavLink to="/deshboard">Dashboard</NavLink></li>
        
        {user?<li ><button onClick={logout}>Sign out</button></li>:
        <li className=''> <NavLink to="/login">Login</NavLink></li>}
        
      </ul>
    </div>:""}
    </div>
  </div> 
</div>
          </div>
     );
};
export default Navbar;