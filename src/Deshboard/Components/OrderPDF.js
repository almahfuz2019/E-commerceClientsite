import React, { useEffect, useRef, useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import logo from "../../Images/logo.png"
const OrderPDF = () => {
     const ref=useRef()
     const [singleUserOrder, setSingleUserOrder] = useState({});
     const { id } = useParams();
     useEffect(() => {
          const url = `http://localhost:5000/itemorder/${id}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setSingleUserOrder(data));
     }, []);
     let today = new Date();
     let year = today.getFullYear();
     let mes = today.getMonth()+1;
     let dia = today.getDate();
     var timewithmenits = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     let data =dia+"/"+mes+"/"+year;
     let time =data+","+timewithmenits;
     let subTtotal=0;
     let total=singleUserOrder.TotalPrice;
     for(const userD of singleUserOrder.userData||[]){ 
      subTtotal += parseInt(userD.productQuentity) * parseInt(userD.product.price) 
    }
     return (
          <div className=''>
              <div className='text-end mt-5 '>
              <ReactToPrint trigger={()=>
               <button className='cursor-pointer   text-2xl mr-3'><FaFileDownload/></button>} content={()=>ref.current}/>
              </div>
               <div  ref={ref}>
               <img className='h-12 w-28 text-center mx-auto my-4' src={logo} alt="logo" />
               <div className="grid grid-cols-2 gap-4 px-10  border-t border-black mb-10">
  <div>
    <h1 className='text-2xl font-bold'>Invoice</h1>
     <p className=''><span className='font-semibold'>Order Number</span> #{singleUserOrder.phone?.slice(3, 9)*2}</p>
     <p className=''><span className='font-semibold'>Delevery Date And Time:</span> {time}</p>
     <p className=''><span className='font-semibold'>Payment Method:</span> {singleUserOrder.bkishID==="" || singleUserOrder.bkishNumber===""?<span>Cash on delivery</span>: <span>Bkash <br />phone: {singleUserOrder.bkishNumber} <br />Trans ID: {singleUserOrder.bkishID} </span>}</p>
     <h1 className=''>Issued By: <br />
     <span className='font-semibold'>Medical Shop</span> <br />
     <span>+8801949480806</span>
     </h1>
     </div>
  <div className=' text-end  mt-auto'>
   <h1 className=''>
     <span className='font-bold text-2xl'>Issued To:</span><br />
     <span>{singleUserOrder.name}</span><br />
     <span>{singleUserOrder.village},{singleUserOrder.union},{singleUserOrder.thana},{singleUserOrder.district}</span><br />
     <span>+88{singleUserOrder.phone}</span> <br />
     <span>{singleUserOrder.email}</span> <br />
     <span>Order Date: {singleUserOrder.dateAndTime}</span>
   </h1>
  </div>
</div>

<div className=" mx-10 border-y border-black">
  <table className="table w-full ">
    {/* head */}
    <thead className='border-b border-black'>
      <tr className=" ">
      <th className='bg-white text-sm '>Products</th>
      <th className='bg-white text-sm'>Unit Price</th>
      <th className='bg-white text-sm'>Quantity</th>
      <th className='bg-white text-sm'>Price</th>
      </tr>

    </thead>
    <tbody>
      {/* row 1 */}
      {
        
  singleUserOrder.userData?.map(x=>
<tr key={x._id} className=' mb-2 '>
      <td className=' pl-5 w-full text-xs '>{x.product.name}</td>

      <td><div className='flex items-center ml-1 justify-center text-center'>
            <img src="https://i.ibb.co/RS3Xm74/1200px-Taka-Bengali-letter-svg-1.png" className='h-2.5 mr-0.5 mt-1' alt="" />
            <p className="text-center  text-xs  mt-1 text-primary "> {x?.product?.price} </p>  
              </div></td>
      <td className='text-center text-xs '>{x.productQuentity }</td>
      <td className=' text-center text-xs '><div className='flex items-center ml-1 justify-center mr-7  text-start'>
            <img src="https://i.ibb.co/RS3Xm74/1200px-Taka-Bengali-letter-svg-1.png" className='h-2.5 mr-0.5 mt-1' alt="" />
            <p className=" mt-1 text-primary "> {x.productQuentity*x.product.price } </p>  
              </div></td>
    </tr>
)
}
      
    </tbody>
  </table>
</div>

<table className="table-fixed  w-full text-center ">
 
  <tbody>
  
<tr className=' mb-2  text-seart m-72'>
      <td className=' pl-5'></td>
      <td></td>
      <td></td>
      <td className='border-black border-b pl-10'><div className='text-start'>
<h1 className=' font-semibold '>Subtotal
</h1>
<p>+Delivery fee</p>
<p>-Discount</p>
<p className='font-bold'>Total</p>
  </div></td>
      <td className=' text-end border-black border-b px-10'>
        <div className=' py-5 '>
<h1 className=' font-semibold '>BDT {subTtotal}</h1>
<p className=' '>BDT 100</p>
<p className=' '>BDT 00</p>
<p className=' font-bold'>BDT {total}</p>
  </div></td>
    </tr>


    
  </tbody>
</table>
 


<div id="pdffooter" className='text-center py-3 bg-gray-200'>Thanks for shopping
                </div>

               </div>
          </div>
     );
};
export default OrderPDF;