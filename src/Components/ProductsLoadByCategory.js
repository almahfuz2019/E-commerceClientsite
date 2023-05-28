import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link  } from 'react-router-dom';
import Loading from './Loading';
const ProductsLoadByCategory = () => {
     const [newProducts,setNewProducts]=useState([])
     const[productLoading,setProductLoading]=useState(true);
     useEffect(()=>{
          setProductLoading(true)
          fetch("http://localhost:5000/productsearchbycategorywithlimit?catagory=Beauty Care")
          .then(res=>res.json())
          .then(data=>setNewProducts(data))
          setProductLoading(false)
     },[])
     if(productLoading){
          return <Loading/>
     }
     return (
          <>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mx-5-2 sm:mx-0 '>
          {newProducts?.map(product=>

               <Link key={product._id}  to={`/single/${product._id}`}>
               
                       <div className=" bg-white    shadow-lg   border border-primary rounded border-opacity-30">
                      <div className="h-40 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-2 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none "    style={{backgroundImage: `url(${product.image1})`}}>
                        <div className="flex justify-between">
                         </div>
                      <div className='flex'>
                          <div>
                          <p><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none"> {product.status} </span> </p>
                          </div>
                           <div className='flex items-center'>
                           <p className=''>
                           <span className="uppercase text-xs  bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none ml-1 flex items-center"><span className="line-through decoration-gray-400 flex items-center   text-gray-800 "><TbCurrencyTaka />{product.previcePrice} </span><span className=' ml-1 '> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
                           </p>
                           </div>
                      </div>  
                      </div>  
                           <div className="p-2  items-center "> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
                           <div className='text-center'>
                           <Link to={`/single/${product._id}`} className="text-gray-800 text-center mt-1 text-sm  font-bold hover:underline hover:text-primary" >{(product.name).slice(0,20)}</Link>
                           </div>    <p className="text-center text-gray-800 mt-1">€{product.price}</p>    
                           
                           </div>
                         
                           </div>
                           </Link>
                       )}
                       </div>
                       </>
     );
};
export default ProductsLoadByCategory;