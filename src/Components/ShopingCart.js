import axios from 'axios';
import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseUserSpacifiqData from '../Deshboard/Hooks/UseUserSpacifiqData';
import Notfound from './Notfound';
const ShopingCart = () => {
  const[quentity,setQuentity]=useState("");
const {usdata,handleUserDelete,total,subTotal,shippingCharge,error}=UseUserSpacifiqData();
const handleUpdateCatagory = async(id) => {
     const url = `http://localhost:5000/quentity/${id}`;
     await axios.put(url,quentity)
          toast.success('Update Successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            });  
 } 
 const handleCatagoryNameChange = e => {
  const getQuentity = e.target.value;
  const quentityset = { productQuentity: getQuentity };
  setQuentity(quentityset);
}
     return (
          <div>
             {error?<><Notfound/></>: 
<section className=''>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-0 ">
    <div className=" mx-auto ">
      <header className="text-center">
        <h1 className="text-3xl font-bold  sm:text-4xl">My shopping cart</h1>
      </header>
      <div className='mx-auto text-center mt-2'>
      <ul className="steps ">
  <li className="step step-primary mx-2">Add Product</li>
  <li className="step step-primary mx-2">Shopping Cart</li>
  <li className="step mx-2">CheckOut</li>
</ul>
</div>
<div className=" bg-gray-100 mt-16 ">
    <div className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg ">
    {usdata?.map(data=>
        <div key={data._id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                 <div className='flex items-center justify-center'>
          <img src={data?.product?.image1} alt="product-image" className=" h-40 md:h-20 rounded-lg " />
          </div>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-2 sm:mt-0">
              <h2 className="sm:text-md font-bold text-sm text-gray-900">{data?.product?.name}</h2>
              <p className=" text-xs text-gray-700">
              <div>
              <dt className="  flex items-center sm:text-sm text-xs">Price:  <div className='flex items-center ml-1'>
   
          <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-2.5 mr-0.5 mt-0.5' alt="" />
  
            <p className="text-center text-gray-800 mt-1 "> {data?.product?.price}</p>  
              </div> </dt>
           
              <dt className="inline sm:text-sm text-xs">Quentity:{data?.productQuentity}</dt>
              {/* <dt className="inline text-sm">Quentity: {data?._id}</dt> */}
            </div>

              </p>
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                {/* <span onClick={() => setQuentity(quentity - 1)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span> */}
             
                <input className="h-8 w-16 border bg-white text-center text-xs outline-none" type="number" defaultValue={data?.productQuentity} min="1" onChange={handleCatagoryNameChange}/>
                
                {/* <span onClick={() => setQuentity(quentity + 1)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span> */}
            <button className='ml-2 btn btn-sm' onClick={()=>handleUpdateCatagory(data._id)}>save</button>
              </div>
              
              <div className="flex items-center space-x-4">
                <p className="text-sm"><div className='flex items-center ml-1'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-2.5 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 "> {data?.productQuentity*data?.product?.price}</p>  
              </div></p>

                
                <svg onClick={()=>handleUserDelete(data._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700 flex items-center"><div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 ">{subTotal}</p>  
              </div>  </p>
        </div>
        <div className="flex justify-between mb-2 ">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700 flex items-center"> <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 ">{shippingCharge}</p>  
              </div> </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">Discount</p>
          <p className="text-gray-700 flex items-center"> <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 "> 000</p>  
              </div> </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">VAT</p>
          <p className="text-gray-700 flex items-center"> <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 "> 000</p>  
              </div> </p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold flex  items-center justify-end"><div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 ">{total}</p>  
              </div></p>
          
            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
                </svg>

                <p className="text-xs whitespace-nowrap ">No Discounts Applied</p>
              </span>
            </div>
          </div>
        </div>
  <div className='mt-6 w-full'>
  <Link to="/checkout" className=" w-full rounded-md btn-primary btn p-1 font-medium text-blue-50 ">Proceed to checkout</Link>
  </div>
      </div>

    </div>
  </div>
      {/* <div className="my-10  border border-spacing-2 p-5 rounded-md bg-white border-primary border-opacity-30 md:hidden block">
        <ul className="space-y-4 ">
          
          {usdata?.map(data=>
        <li className="sm:flex items-center border-primary border-b-2 p-2">
        <img
          src={data?.product?.image1}
          alt="Product Image"
          className="object-cover w-16 h-16 rounded border-primary border"
        />

        <div className="sm:ml-4">
          <h3 className="text-md sm:text-xl text-gray-900 ">{data?.product?.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline text-sm">Price: {data?.product?.price}</dt>
              <br />
              <dt className="inline text-sm">Quentity: {data?.productQuentity}</dt>
            </div>
          </dl>
        </div>

        <div className="flex items-center justify-between sm:justify-end flex-1 gap-2 mt-2 sm:0">
          
            <label for="Line1Qty" className="sr-only"> Quantity </label>

            <h1
              id="Line1Qty"
              className="py-2 px-2 rounded border-primary border-opacity-40 bg-gray-100 p-0 text-center items-center  sm:text-xl text-sm  font-semibold flex"
            >{data?.product?.price} <span className="text-primary text-xs mx-1"><BsAsterisk/></span> {data?.productQuentity}=
             {data?.productQuentity*data?.product?.price}</h1>
        
          <Link onClick={()=>handleUserDelete(data._id)} className="text-gray-600 transition hover:text-red-600 ">
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </Link>
        </div>
      </li>
            )}
        </ul>
{usdata.length===0?<p className='text-xl text-red-600 text-center'>Not found</p>:""}
        <div className="flex justify-end pt-8 mt-8 border-t border-gray-100 ">
          <div className="w-screen max-w-lg space-y-4  border border-primary border-2 rounded-lg p-5 ">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between border-b-2 text-xl">
                <dt>Subtotal</dt>
                <dd className='font-bold flex items-center'><TbCurrencyTaka/> {subTotal}</dd>
              </div>

              <div className="flex justify-between border-b-2 text-xl">
                <dt>VAT</dt>
                <dd className='font-bold flex items-center'><TbCurrencyTaka/> 0.00</dd>
              </div>
              <div className="flex justify-between border-b-2 text-xl">
                <dt>Shipping chirge</dt>
                <dd className='font-bold flex items-center'><TbCurrencyTaka/> {shippingCharge}</dd>
              </div>

              <div className="flex justify-between border-b-2 text-xl">
                <dt>Discount</dt>
                <dd className='font-bold flex items-center'><TbCurrencyTaka/>-$000</dd>
              </div>

              <div className="flex justify-between border-b-2  text-xl ">
                <dt >Total</dt>
                <dd className='font-bold text-xl flex items-center'><TbCurrencyTaka/>{total}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ml-1 mr-1.5 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                />
                </svg>

                <p className="text-xs whitespace-nowrap">No Discounts Applied</p>
              </span>
            </div>

            <div className="flex justify-end">
              <Link
                to="/checkout"
                className="block sm:px-5 sm:py-3 pt-1 text-sm text-white btn btn-primary transition btn-sm sm:btn-md"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
}
          </div>
     );
};

export default ShopingCart;