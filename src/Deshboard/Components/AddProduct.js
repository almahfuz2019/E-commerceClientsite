import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddProduct = () => {
    const [detailsValue, setValue] = useState('');
    const [firstImageUrl, setFirstImageUrl] = useState("");
    const [secondImageUrl, setsecondImageUrl] = useState("");
    const [thirdImageUrl, setThirdImageUrl] = useState("");
    const {register, handleSubmit, formState: { errors }} = useForm();
    const { data: categories, isLoading } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
          const res = await fetch('http://localhost:5000/categories');
          const data = await res.json();
          return data;
      }
  })
   // image host key (imgbb) 
    const imageHostKey ="bd5d248a0758556e9b5c6d53c6383bdf";
    // first image 
    const firstImageUpload = (event) => {
        const image2 = event.target.files[0];
        if(event.target.files[0].size > 262144){
alert("Your file size is greater than 250KB");
event.target.value = "";
         };
        const formData = new FormData();
        formData.set("image", image2);
        axios
          .post(
`https://api.imgbb.com/1/upload?key=${imageHostKey}`,
formData
          )
          .then((res) => {
setFirstImageUrl(res.data.data.display_url);
          })
          .catch((error) => {
          });
      };
    // second image 
    const secondImageUpload = (event) => {
        const image2 = event.target.files[0];
        if(event.target.files[0].size > 262144){
alert("Your file size is greater than 250KB");
event.target.value = "";
         };
        const formData = new FormData();
        formData.set("image", image2);
        axios
          .post(
`https://api.imgbb.com/1/upload?key=${imageHostKey}`,
formData
          )
          .then((res) => {
setsecondImageUrl(res.data.data.display_url);
          })
          .catch((error) => {
          });
      };
    //   third image 
    const thirdImageUpload = (event) => {
        const image3 = event.target.files[0];
        if(event.target.files[0].size > 262144){
alert("Your file size is greater than 250KB");
event.target.value = "";
         };
        const formData = new FormData();
        formData.set("image", image3);
        axios
          .post(
`https://api.imgbb.com/1/upload?key=${imageHostKey}`,
formData
          )
          .then((res) => {
setThirdImageUrl(res.data.data.display_url);
          })
          .catch((error) => {
          });
      };
    const handleAddProduct = data => {
    const doctor = {
        name: data.name, 
        price: data.price,
        // details: data.details,
        details: detailsValue,
        previcePrice: data.previcePrice,
        catagory: data.catagory,
        status:data.status,
        brand:data.brand,
        keywords:data.keywords,
        image1: firstImageUrl,
        image2: secondImageUrl,
        image3: thirdImageUrl,
    }
    fetch('http://localhost:5000/product', {
        method: 'POST',
        headers: {
'content-type': 'application/json', 
authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(doctor)
    })
    .then(res => res.json())
    .then(result =>{
        toast.success('Addedd Successfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    });
    data.target.reset();
    })
}
        
    
   
    if(isLoading){
      return <Loading/>
    }
    return (
        <div>
<form onSubmit={handleSubmit(handleAddProduct)}>
<section className="text-gray-600 body-font relative ">
<div className="container px-5 sm:py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="border-primary  border-2 md:w-1/2 bg-white flex flex-col md:mx-auto w-full md:py-8 mt-8 md:mt-0  rounded-md p-5">
      <h2 className="text-gray-900 text-lg mb-1 
     title-font font-semibold">Add a product</h2>
<div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">Product name</label>
        <input type="text" {...register("name", {
required: "Name is Required"
        })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Discount price</label>
        <input type="text" {...register("price", {
required: "Price is Required"
        })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Product previous price</label>
        <input type="text" {...register("previcePrice", {
           required: "Previous price is Required"
        })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        {errors.previcePrice && <p className='text-red-500'>{errors.previcePrice.message}</p>}
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Brand Name</label>
        <input type="text" {...register("brand")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
     
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Keywords</label>
        <input type="text" {...register("keywords")} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
     
    </div>
   
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Details</label>
        <ReactQuill className='h-32 mb-5' theme="snow" value={detailsValue} onChange={setValue} />
       
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Select a category</label>
        <select 
        {...register('catagory')}
        className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded">
{
    categories.map(specialty => <option
        key={specialty._id}
        value={specialty.catagory}
    >{specialty.catagory}</option>)
}
        </select>
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> Select status</label>
        <select 
        {...register('status')}
        className="select w-full  border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 rounded">
           <option value="Available">Available</option>
           <option value="Unavailable">Unavailable </option>
        </select>
    </div>
    <div className="relative mb-4">
        <label className="leading-7 text-sm text-gray-600"> select product main Image</label>
        <input type="file" {...register("image", {
required: "First Image is Required"
        })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  onChange={firstImageUpload} required />
        {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
    </div>
   <div className="relative mb-4">
   <label className="leading-7 text-sm text-gray-600"> selectproduct second Image</label>
   <input className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    type='file'
    onChange={secondImageUpload}
  />
  
   </div>
   <div className="relative mb-4">
   <label className="leading-7 text-sm text-gray-600"> select product third Image</label>
   <input  className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
    type='file'
    onChange={thirdImageUpload}
  />
   </div>
    <input className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" value="Submit" type="submit"/>
  <p className="text-xs text-gray-500 mt-3">This is very important for your website.So,be careful.</p>
    </div>
    </div>
    </section></form>
        </div>
    );
};
export default AddProduct;