import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseCopen from '../Deshboard/Hooks/UseCopen';
const ManageCopen = () => {
     const{copone,handleCatagoryDelete}=UseCopen();
     return(
          <div className="overflow-x-auto sm:m-10 m-2">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th >No</th>
                <th className='text-center'>Coupon</th>
                <th className='text-end'>Action</th>
              </tr>
            </thead>
                
         {copone.map((cata,index)=>
            <tbody key={cata._id}>
              <tr className='border rounded'>
                <td>{index+1}</td>
               
                <td  className='text-center'>{cata?.catagory}</td>
                
                <td className='flex gap-3 text-2xl justify-end'>
                <Link to={`/updatecopen/${cata._id}`}>
            <FaRegEdit/>
            </Link>
            <Link onClick={()=>handleCatagoryDelete(cata._id)}>
            <FaRegTrashAlt/>
            </Link>
                </td>
              </tr>
            </tbody>
          )}
          </table>
        </div>
     );
};
export default ManageCopen;