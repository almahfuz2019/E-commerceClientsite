import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import UserReview from './OrderPolicy';
import { FaArrowCircleLeft} from 'react-icons/fa';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "../css/ProductDetails.css";
import { BsDash,  BsPlus} from "react-icons/bs";
import Loading from './Loading';
const ProductDetails = () => {
  const [newProducts,setNewProducts]=useState([])
  const[productLoading,setProductLoading]=useState(true);
  const [inputNumber, setInputNumber] = useState(1);
  const [user]=useAuthState(auth);
  const [data, setData] = useState([]);
  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem('productquenty', JSON.stringify(inputNumber));
  }, [inputNumber]);
  const handleAddtocart=async(event)=>{
    event.preventDefault();
    const productQuentity=event.target.productQuentity.value;
    const useremail=user.email;
    // const product=singleProductDetails;
    const product={name:singleProductDetails.name,price:singleProductDetails.price,image1:singleProductDetails.image1};
     const NotesData={productQuentity,useremail,product};
     await axios.post("http://localhost:5000/addtocart",NotesData)
     toast.success('Added Successfully', {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: false,
       progress: undefined,
       theme: "colored",
       });
      event.target.reset();
     }
     const {id} = useParams();
     const [singleProductDetails, SetSingleProductDetails] = useState({});
     const fatchcategory=(a)=>{
      setProductLoading(true)
      const url= `http://localhost:5000/productsearchbycategorywithlimit?catagory=${a}`;
   
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setNewProducts(data)})
        setProductLoading(false)
    }
     useEffect(() => {
      setProductLoading(true)
         const url = `http://localhost:5000/product/${id}`;
         fetch(url)
             .then(res => res.json())
             .then(data =>{
               SetSingleProductDetails(data)
               setData(data)
               setProductLoading(false)
               fatchcategory(data.catagory);
              });
     },[id]);
    if(productLoading){
      return <Loading/>
    }

     return (
          <div className='bg-gray-100 p-2'>
               <a  href = "javascript:history.back()"><span className="ml-1 text-2xl lg:hidden  text-primary">
                <FaArrowCircleLeft/></span></a>
                <section className=''>
  <div className=" py-8 px-4 mx-auto">
    <div className="grid  grid-cols-1 gap-8 md:gap-0  md:grid-cols-2">
      <div className="grid grid-cols-1  md:grid-cols-1  justify-items-center md:m-16  md:mt-0 mt-0 ">
      
      <Carousel autoPlay="true" autoFocus="true" emulateTouch="true" infiniteLoop="true" className=''>
        <div className='rounded-xl border border-primary border-opacity-30  '>
          {
           singleProductDetails.image1!=="" && 
           <img
          alt="Les Paul"
          src={singleProductDetails.image1}
          className=" aspect-square rounded-xl border border-primary border-opacity-30   "
        /> 
        
          }
        </div>
        <div className='rounded-xl border border-primary border-opacity-30  '>
        {
           singleProductDetails.image2!==""? 
        <img
          alt="Les Paul"
          src={singleProductDetails.image2}
          className=" aspect-square rounded-xl border border-primary border-opacity-30   "
        />:<img
        alt="Les Paul"
        src={singleProductDetails.image1}
        className=" aspect-square rounded-xl border border-primary border-opacity-30   "
      />}</div>
        <div className='rounded-xl border border-primary border-opacity-30  '>
      {
        singleProductDetails.image3!==""? 
        <img
        alt="Les Paul"
        src={singleProductDetails.image3}
        className=" aspect-square rounded-xl border border-primary border-opacity-30   "
      />:<img
      alt="Les Paul"
      src={singleProductDetails.image1}
      className=" aspect-square rounded-xl border border-primary border-opacity-30   "
    />
      }
       </div>
            </Carousel>
        
      </div>

      <div className="sticky top-0 ">
        <strong
          className="rounded-full border border-primary bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-primary"
        >
          Order Now
        </strong>

        <div className="flex justify-between mt-4">
          <div className="">
          <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-gray-800 text-xl md:text-2xl font-bold"> <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-4 mr-1 mt-0.5' alt="" />
            <p className="text-center   ">{singleProductDetails.price}</p>  
              </div> </span>
            <span className="text-red-700 font-bold  line-through mb-0.5"> <div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/MscTYwN/1200px-Taka-Bengali-letter-svg-2.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center  ">{singleProductDetails.previcePrice}</p>  
              </div> </span>
          </div>

          <span className="text-gray-500 text-sm">incl. VAT</span>
        </div>
            <h1 className="text-xl sm:text-2xl font-bold">
              {singleProductDetails.name}
            </h1>
            

            <p className="mt-2 text-sm "><span className='bg-white p-1 rounded-l-none  rounded-lg font-semibold  px-1'>Brand Name: {singleProductDetails?.brand?<span className='text-primary font-bold '>{singleProductDetails.brand}</span>:<span className='text-primary font-bold'>Non Brand</span>}</span></p>
            {/* <p>Status: In Stock</p> */}
            <div className="mt-2 -ml-0.5 flex">
              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
              </svg>

              <svg
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
              </svg>
            </div>
                  <p className='font-semibold'>Category: {singleProductDetails.catagory}</p>
          </div>
          
        </div>

        <details
          className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="block">
            <div>
            <div className='group-open:hidden prose max-w-none' dangerouslySetInnerHTML={{ __html: singleProductDetails.details?.slice(0,250) }} />
              {/* <div className="prose max-w-none group-open:hidden" dangerouslySetInnerHTML={{ __html: singleProductDetails.details }}>
                <p>
                  {singleProductDetails?.details?.slice(0,250)}
                </p>
              </div> */}

              {singleProductDetails?.details.length>250 &&  <span
                className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0"
              >
                Read More
              </span> }
              
            </div>
          </summary>

          <div className="pb-6 prose max-w-none">
          
 <div dangerouslySetInnerHTML={{ __html: singleProductDetails.details?.slice(0,250000) }} />

           
          </div>
        </details>
        <form onSubmit={handleAddtocart} className="">
        <div className="flex items-center text-gray-500 gap-2 my-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>

          <span className="text-sm">1-4 day shipping</span>
          
        </div>
  
        {
          singleProductDetails.status==="Unavailable"?
          <div className="flex mt-2 items-center ">
            <div className='flex items-center border bg-white'>
              <label for="quantity" className="sr-only">Qty</label>
              <Link className='md:text-4xl text-primary text-2xl bg-white' onClick={() => setInputNumber(inputNumber - 1)}><BsDash/></Link>
              <input
                min={1}
                value={inputNumber} type="number"
                className="w-12 sm:w-20 rounded border-primary  text-center font-semibold text-primary  border-3 input-sm sm:input-md border-opacity-30 bg-white  "
                name='productQuentity' required
              />
               <Link className='md:text-4xl text-primary text-2xl bg-white' onClick={() => setInputNumber(inputNumber + 1)}><BsPlus/></Link>
            </div>
         {user? <button type='button'
              className=" sm:px-5 sm:py-3 ml-3 text-xs sm:font-medium text-white btn bg-gray-300 flex btn-sm sm:btn-md cursor-not-allowed"
            >
              Add to cart<span className='ml-4 text-xl'> <FaCartPlus/></span>
            </button>: <Link to="/login" type='button'
              className=" sm:px-5 sm:py-3 ml-3 text-xs sm:font-medium text-white btn bg-primary  flex btn-sm sm:btn-md cursor-not-allowed"
            >
              Add to cart <span className='ml-4 text-xl'> <FaCartPlus/></span>
            </Link>}
          </div>
          : 
          <div className="flex mt-2 items-center ">
            <div className='flex items-center border bg-white'>
              <label for="quantity" className="sr-only">Qty</label>
              <Link   className='md:text-4xl text-primary text-2xl bg-white ' onClick={() =>{
                inputNumber<=1?  setInputNumber(1): setInputNumber(inputNumber - 1)
              }}><BsDash/></Link>
     
              <input
                
                min="1"
                value={inputNumber}
                className="w-12 sm:w-20 rounded border-primary  text-center font-semibold text-primary  border-3 input-sm sm:input-md border-opacity-30 bg-white  "
                name='productQuentity' required
              />
               <Link className='md:text-4xl text-primary text-2xl bg-white' onClick={() => setInputNumber(inputNumber + 1)}><BsPlus/></Link>
            </div>
         {user? <button  type='submit'
              className="sm:px-5 sm:py-3 ml-3 text-xs sm:font-medium text-white btn bg-primary hover:bg-primary  flex btn-sm sm:btn-md  "
            >
              Add to Cart <span className='ml-4 text-xl'> <FaCartPlus/></span>
            </button>: <Link  to="/login" type='submit'
              className="sm:px-5 sm:py-3 ml-3 text-xs sm:font-medium text-white btn bg-primary hover:bg-primary flex btn-sm sm:btn-md "
            >
              Add to Cart <span className='ml-4 text-xl'> <FaCartPlus/></span>
            </Link>}
          </div>
        }
        </form>
            <br />
            {
            singleProductDetails.status==="Unavailable"?
            <Link to=""type='submit'className="block sm:py-3  text-xs sm:font-medium text-white btn  bg-gray-300 cursor-not-allowed flex btn-sm sm:btn-md w-full ">Order Now</Link>:<Link to={`/single-order/${singleProductDetails._id}`}type='btn'className="block sm:py-3  text-xs sm:font-medium text-white btn btn-primary flex btn-sm sm:btn-md w-full">Order Now</Link>
            }
      </div>
    </div>
  </div>
</section>
<> 
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-flow-col-6 2xl:grid-flow-col-8  gap-2 sm:gap-3 mx-5-2 sm:mx-0   bg-white 
p-2'>
          {newProducts?.map(product=>

               <Link key={product._id}  to={`/single/${product._id}`}>
               
                       <div className=" bg-white    shadow-lg   border border-primary rounded border-opacity-30">
                      <div className="h-40 sm:h-40 w-full bg-gray-900 flex flex-col  justify-between p-1 sm:pb-1 sm:pl-1 bg-cover bg-center border-b-2 border-primary rounded rounded-b-none "    style={{backgroundImage: `url(${product.image1})`}}>
                        <div className="flex justify-between">
                         </div>
                         <div className='flex items-center'>
           <div>
           <p><span className="uppercase text-xs bg-green-50  border-green-500 border rounded text-green-700 font-medium select-none px-0.5"> {product.status} </span> </p>
           </div>
            <div className='flex items-center mt-1'>
            <p className=' '>
            <span className="uppercase text-xs  bg-green-50  border-green-500 border rounded px-0.5 text-green-700 font-medium select-none ml-1 flex items-center"><span className="line-through decoration-gray-400 flex items-center   text-gray-800 "><div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/MscTYwN/1200px-Taka-Bengali-letter-svg-2.png" className='h-2 mr-0.5 ' alt="" />
            <p className="text-center text-red-700 line-through  decoration-red-700 ">{product.previcePrice}</p>  
              </div> </span><span className=' ml-1 '> {Math.ceil(((product.price-product.previcePrice)*100/product.price))}%</span> </span> 
            </p>
            </div>
       </div>    
                      </div>  
                           <div className="p-2  items-center h-28"> <p className="text-gray-600 font-light text-xs text-center">{product?.catagory}</p>
                           <div className='text-center'>
                           <Link to={`/single/${product._id}`} className="text-center mt-1 text-sm  font-semibold text-primary hover:underline inline-block" >{(product.name).slice(0,42)}</Link>
                           </div>    <p className="text-center text-gray-800 mt-1"><div className='flex items-center justify-center'>
            <img src="https://i.ibb.co/DRrF0hc/1200px-Taka-Bengali-letter-svg.png" className='h-3 mr-0.5 mt-0.5' alt="" />
            <p className="text-center text-gray-800 mt-1 ">{product.price}</p>  
              </div> </p>    
                           
                           </div>
                         
                           </div>
                           </Link>
                       )}
                       </div>
                       </>
                    
                       
                      
<UserReview/>
          </div>
     );
};
export default ProductDetails;