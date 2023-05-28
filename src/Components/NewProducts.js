import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NewProducts = () => {
     const [newProducts,setNewProducts]=useState([])
     const[productLoading,setProductLoading]=useState(true);
     useEffect(()=>{
          setProductLoading(true)
          fetch("http://localhost:5000/newproducts")
          .then(res=>res.json())
          .then(data=>setNewProducts(data))
          setProductLoading(false)
     },[])
     if(productLoading){
          return ;
     }
     return (
          <>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 mx-5-2 sm:mx-0 bg-white p-2'>
          {newProducts?.map(product=>

               <Link  key={product._id} to={`/single/${product._id}`}>
               
                       <div className=" bg-white    shadow-md   border border-primary rounded border-opacity-30">
                      <div className="h-40 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-1 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none "    style={{backgroundImage: `url(${product.image1})`}}>
                        <div className="flex justify-between">
                         </div>
                      <div className='flex'>
                          <div>
                          <p><span className="uppercase text-xs bg-green-50 px-0.5 border-green-500 border rounded text-green-700 font-medium select-none"> {product.status} </span> </p>
                          </div>
                           <div className='flex items-center mt-1'>
                           <p className=''>
                           <span className="uppercase text-xs  bg-green-50 px-0.5 border-green-500 border rounded text-green-700 font-medium select-none ml-1 flex items-center"><span className="line-through decoration-gray-400 flex items-center   text-gray-800 "><div className='flex items-center justify-center'>
                           <img src="https://i.ibb.co/MscTYwN/1200px-Taka-Bengali-letter-svg-2.png" className='h-2 mr-0.5 ' alt="" />
            <p className="text-center text-red-700 line-through  decoration-red-700 ">{product.previcePrice}</p>  
              </div>  </span><span className=' ml-1 '> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
                           </p>
                           </div>
                      </div>  
                      </div>  
                           <div className="p-2 h-28 items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
                           <div className='text-center'>
                           <Link to={`/single/${product._id}`} className=" text-center mt-1 text-sm  font-semibold hover:underline text-primary inline-block" >{(product.name).slice(0,42)} </Link>
                           </div>   <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800  ">{product.price}</p>  
              </div>      
                           
                           </div>
                         
                           </div>
                           </Link>
                       )}
                       </div>
                       </>
     );
};
export default NewProducts;