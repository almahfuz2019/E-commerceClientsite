import React, { useState } from 'react';

const secondNav = () => {
     const search=(event)=>{
          const searchInput=event.target.inputValue.value;
     }
     return (
          <div>
               <div className="text-center  mt-5 sm:mt-10   ">
              <form onChange={search} className="flex justify-center mx-2">
              <input type="text" className="sm:w-1/2 py-2 pl-10 pr-4  bg-white border rounded-r-none rounded-md focus:border-primary focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-primary input input-bordered input-primary w-full" name='inputValue' placeholder="Search here"/>
               <div className=" rounded-l-none bg-white border border-primary rounded-md w-auto">
    <label for="SortBy " className="sr-only bg-white">Catagory</label>
    <select id="SortBy" className="h-10 border-r-0 text-sm border-primary rounded px-2 bg-white">
      <option className=''>Catagory</option>
      <option value="Title, DESC">Title,</option>
      <option value="Title, ASC">Title, ASC</option>
      <option value="Price, DESC">Price, DESC</option>
      <option value="Price, ASC">Price, ASC</option>
    </select>
  </div>
               </form>    
               </div>
      
                {/* <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden mx-5 sm:mx-0">
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">News</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Articles</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Videos</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Tricks</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHP</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Laravel</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Vue</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">React</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Tailwindcss</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Meraki UI</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">CPP</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">JavaScript</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Ruby</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Mysql</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Pest</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHPUnit</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Netlify</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">VS Code</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">PHPStorm</a>
            <a className="mx-4 text-sm leading-5  hover:underline md:my-0" href="#">Sublime</a>
        </div>  */}
          </div>
     );
};
export default secondNav;