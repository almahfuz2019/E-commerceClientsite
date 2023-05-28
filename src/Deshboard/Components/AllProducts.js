import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import { FaRegTrashAlt,FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
const AllProducts = () => {
  const [keywords,setKeywords]=useState("")
     const[page,setPage]=useState(0);
     const[size,setSize]=useState(25);
       const[pageCount,setPageCount]=useState(0);
       const[products,setProducts]=useState([]);
       const[productsLoading,setProductsLoading]=useState(true);
    const [productsCount,setProductsCount]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/allproductscount")
      .then(res=>res.json())
      .then(data=>setProductsCount(data))
  },[products])
  const handleSearch = (e) => {
    setKeywords(e.target.value);
  };
  // delete products 
  const handleProductDelete=async(id)=>{
    const proceed=window.confirm("are you sure you want to delete?");
    if(proceed){
    await axios.delete(`http://localhost:5000/product/${id}`)
     .then(response=>{
          if(response.data.deletedCount>0){
               const deletedremaining=products.filter(note=>note._id !==id);
               setProducts(deletedremaining)
          }
     })
}
}
  //get allproducts 
       const fetchProducts = () => {
         setProductsLoading(true)
         fetch(`http://localhost:5000/allproducts?page=${page}&size=${size}`)
         .then(res=>res.json())
         .then(data=>{
           setPageCount(Math.ceil(data.count/size))
           setProducts(data.products)
           setProductsLoading(false)
         })
       }
  useEffect(()=>{
    fetchProducts()
  },[page,size])
  useEffect(()=>{
    const url=`http://localhost:5000/productsearch?keywords=${keywords}`;
    if(keywords!==""){
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setPageCount(Math.ceil(data.length/size))
       
      })
    }else if(keywords===""){
      fetchProducts()
    }
  },[keywords])
  const pageIncrease=()=>{
    setPage(page+1)
  }
  const pageDecrease=()=>{
    setPage(page-1)
  }
  
     if(productsLoading){
          return <Loading/>;
     }
     return (
          <div>
     <div className="overflow-x-auto">
     <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Products: {productsCount.count}</span></div>
     <div className="flex  space-x-1  my-4 sm:ml-5 mx-1">
	<button onClick={pageDecrease} title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 px-2 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 px-2 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button onClick={pageIncrease}  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option  value="20">20</option>
          <option selected value="50">50</option>
        </select>  
</div>
<div className='mx-auto text-center mb-5'>
<input type="text" placeholder="Search here by product name" className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary" onChange={handleSearch}/>
</div>
     <table className="table w-full">
       {/* <!-- head --> */}
       <thead>
         <tr>
           <th>No</th>
           <th>Image</th>
           <th>Name</th>
           <th>Category</th>
           <th>Action</th>
         </tr>
       </thead>
    {products.map((product,index)=>
       <tbody>
         <tr className='border bg-white'>
           <th>{index+1}</th>
           <td>
           <div className="avatar border border-primary rounded border-2">
              <div className="mask mask-squircle w-12 h-12 ">
                {
                product?.image1?
    <img  src={product?.image1} alt="product image"/>:
    <img src="" className='bg-primary' alt='not found image'/>
                }
              </div>
            </div>
           </td>
           <td>{product?.name}</td>
           <td>{product?.catagory} 
           <br />
           price: {product?.price}
           <br/>
           {product?.dateAndTime}
           </td>
           <td className='flex gap-3 text-2xl'>
            <Link to={`/update-product/${product._id}`}>
            <FaRegEdit/>
            </Link>
            <Link onClick={()=>handleProductDelete(product._id)}>
            <FaRegTrashAlt/>
            </Link>
           </td>
         </tr>
       </tbody>
     )}
     </table>
   </div>
   <div className="flex  space-x-1  my-4 sm:ml-5 mx-1">
	<button onClick={pageDecrease} title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 px-2 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 px-2 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button onClick={pageIncrease}  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 px-1 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	</button>
  <select className='inline-flex items-center justify-center  w-14 h-6 sm:w-20 sm:h-8 py-0 px-2 border rounded-md shadow-md border-primary text-primary bg-white' onChange={e=>setSize(e.target.value)} >
          <option  value="5">5</option>
          <option  value="10">10</option>
          <option value="15">15</option>
          <option  value="20">20</option>
          <option selected value="50">50</option>
        </select>  
</div>
          </div>
     );
};
export default AllProducts;