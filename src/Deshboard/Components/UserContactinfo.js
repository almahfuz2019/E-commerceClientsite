import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading';
const UserContactinfo = () => {  
  const [search,setSearch]=useState("")
     const[page,setPage]=useState(0);
     const[size,setSize]=useState(30);
       const[pageCount,setPageCount]=useState(0);
       const[products,setProducts]=useState([]);
       const[productLoading,setProductLoading]=useState(true);
       const fetchProducts = () => {
         setProductLoading(true)
         fetch(`http://localhost:5000/contact?page=${page}&size=${size}`)
         .then(res=>res.json())
         .then(data=>{
           setPageCount(Math.ceil(data.count/size))
           setProducts(data.products)
           setProductLoading(false)
        
         })
       }
        
  useEffect(()=>{
    fetchProducts()
  },[page,size])
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(()=>{
    const url=`http://localhost:5000/contactinfosearch?email=${search}`;
    if(search!==""){
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
        setPageCount(Math.ceil(data.length/size))
      })
    }else if(search===""){
      fetchProducts()
    }
  },[search])
  const ab=()=>{
    setPage(page+1)
  }
     if(productLoading){
          return <Loading/>
     }

     const handleOrderDelete=async(id)=>{
          const proceed=window.confirm("Are you sure you want to delete it?");
          if(proceed){
               
               await axios.delete(`http://localhost:5000/contact/${id}`)
               .then(response=>{
                if(response.data.deletedCount>0){
                     const deletedremaining=products.filter(note=>note._id !==id);
                     setProducts(deletedremaining)
                  
                }
           })
          }
      }
     return (
          <div>
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-xl sm:text-3xl '>Total Messages: {products.length}</span></div>
     <div className="flex  space-x-1  my-4 sm:ml-5 ml-2">
	<button onClick={ab} title="previous" type="button" className="inline-flex items-center justify-center  w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
		<svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	</button>
	{
          [...Array(pageCount).keys()]
          .map(number=><button
          count={pageCount}
             className={page===number?'inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md btn-primary ':"inline-flex items-center justify-center  py-0 border rounded-md shadow-md border-primary text-primary w-6 h-6 sm:w-8 sm:h-8 bg-white"} onClick={()=>setPage(number)}>{number+1}</button>)
        }
	<button  type="button" className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 py-0 border rounded-md shadow-md border-primary text-primary bg-white">
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
           <th>email</th>
           <th>Messages</th>
           <th>Action</th>
         </tr>
       </thead>
           
    {products.map((product,index)=>
       <tbody key={product._id}>
         <tr className='border bg-white'>
           <th>{index+1}</th>
           <td>
                <p>{product.email}</p>
           </td>
           <td>{product?.message?.slice(0,20)}</td>
           
           <td className='flex gap-3 text-2xl'>
            <Link to={`/readmore/${product._id}`}>
            <AiFillEye/>
            </Link>
            <Link onClick={()=>handleOrderDelete(product._id)}>
            <FaRegTrashAlt/>
            </Link>
           </td>
         </tr>
       </tbody>
     )}
     </table>
     </div>
       </div>
     );
};

export default UserContactinfo;