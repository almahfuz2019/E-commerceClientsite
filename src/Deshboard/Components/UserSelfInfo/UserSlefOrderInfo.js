import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillEye } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';
const UserSlefOrderInfo = () => {
     const [user]=useAuthState(auth);
     const { isLoading:productLoading, error, data:orders } = useQuery( 'userSelfOrder', () =>
     fetch(`http://localhost:5000/userselforder?email=${user.email}`).then(res =>
       res.json()
 )
   ) 
   if(productLoading){
     return <Loading/>
   }
     return (
          <div>
          <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Products: {orders.length}</span></div>
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Delevary Date</th>
                <th>Action</th>
              </tr>
            </thead>
         {orders.map((order,index)=>
            <tbody key={order._id}>
              <tr className='border bg-white'>
                <th>{index+1}</th>
                <th>{order.dateAndTime}</th>
                <td>
                {order.status==="Wating"?
                  <button className="btn sm:btn-md bg-amber-300 btn-sm sm:loading ">Wating</button>:
                  order.status==="Shipment"?<button className="btn sm:btn-md btn-sm disabled bg-indigo-400">Shipment</button>:
                  order.status==="Done"?<button className="btn sm:btn-md btn-sm disabled bg-green-400 ">Done</button>:
                  order.status==="Cencel"?<button className="btn sm:btn-md btn-sm disabled bg-red-400">Cencel</button>:
                  <button className="btn sm:btn-md btn-sm disabled bg-cyan-300">Confirm</button>}
                </td>
                <td>TK ${order?.TotalPrice} <br />
                Total Item: {order?.userData?.length}
                </td>
               <td>
                    {order.dateAndTime}
               </td>
                <td className='flex gap-3 text-2xl'>
                 <Link to={`/itemorder/${order._id}`} >
                 <AiFillEye/>
                 </Link>
                </td>
              </tr>
            </tbody>
          )}
          </table>
        </div>
        {/* pagination  */}
        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                     <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                             <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                         </div>
                         <div className="sm:flex hidden">
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">2</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-indigo-700 border-t border-indigo-400 pt-3 mr-4 px-2">4</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                             <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                         </div>
                         <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                             <p className="text-sm font-medium leading-none mr-3">Next</p>
                             <svg width={14} height={8} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                 <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                             </svg>
                         </div>
                     </div>
                 </div>
               </div>
     );
};
export default UserSlefOrderInfo;