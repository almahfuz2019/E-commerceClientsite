import React, { useEffect } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import {  VscAccount } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import auth from '../firebase.init';
import { BsSearch } from 'react-icons/bs';
const BottomNavbar = () => {
     const {usdata}=UseUserSpacifiqData();
     const ScrollToTop = () => {
      const { pathname } = useLocation();
      useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
      return null;
    }
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
     return (
      
          <div className="w-full mt-16">
                <section id="bottom-navigation" className=" block fixed inset-x-0 bottom-0 z-10 bg-white shadow lg:hidden"> 
               <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white border-t-1 border border-primary shadow border-x-0 border-b-0 border-opacity-30">
                    <div id="tabs" className="flex justify-between items-center pt-2">
                         <Link to="/" className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center  ">
                              <svg width="25" height="25" viewBox="0 0 42 42" className="inline-block mb-1">
                             <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                 <path d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z" fill="currentColor" fillOpacity="0.1"></path>
                                 <path d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z" fill="currentColor"></path>
                                 <path d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1"></path>
                                 <rect fill="currentColor" transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) " x="17" y="10.3137085" width="30" height="2" rx="1"></rect>
                                 <rect fill="currentColor" transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) " x="-3" y="10.3137085" width="30" height="2" rx="1"></rect>
                             </g>
                              </svg>
                              <span className="tab tab-home block text-xs">Home</span>
                         </Link>
                         <Link to="/view-cart" className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center   cursor-pointer">
                              {user? <div className="mt-1">
      <label tabIndex={0} className="cursor-pointer">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{usdata?.length}</span>
        </div>
      </label>
    </div>: <div className="mt-1">
      <label tabIndex={0} className="cursor-pointer">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">0</span>
        </div>
      </label>
    </div>}
         <span className="tab tab-kategori block text-xs ">Cart</span>
          </Link>
          <Link to="/" onClick={ScrollToTop} className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center  ">
                         

        <div className="mx-auto flex justify-center">
        <BsSearch className='text-2xl cursor-pointer'/> 
        </div>

   
                              <span className="tab tab-explore block text-xs">Search</span>
                         </Link>
          <Link to="/contact" className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center  ">
                         

        <div className="mx-auto flex justify-center">
        <TfiEmail className='text-2xl cursor-pointer'/> 
        </div>

   
                              <span className="tab tab-explore block text-xs">Contact</span>
                         </Link>
                         <Link to="#" className="w-full focus:text-primary hover:text-primary justify-center inline-block text-center  ">
                          <div className=" dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className="">
        <div className="">
        <VscAccount className='text-2xl cursor-pointer'/> 
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact 
       dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28 border border-primary border-opacity-30">
        <li><NavLink to="/deshboard">Deshboard</NavLink></li>
        
        {user?<li ><button onClick={logout}>Sign out</button></li>:
        <li className=''> <NavLink to="/login">Login</NavLink></li>}
        
      </ul>
    </div>
                              <span className="tab tab-explore block text-xs">Account</span>
                         </Link>
                         
                        
                    </div>
               </section>
               </section>
          </div>
     );
};

export default BottomNavbar;