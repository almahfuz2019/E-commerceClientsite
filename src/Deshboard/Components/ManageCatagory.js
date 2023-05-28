import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseCatagory from "../Hooks/UseCatagory"
const ManageCatagory = () => {
     const {catagorys,handleCatagoryDelete}=UseCatagory();
     return(
          <div className="overflow-x-auto sm:m-10 m-2">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th >No</th>
                <th className='text-center'>Category</th>
                <th className='text-end'>Action</th>
              </tr>
            </thead>
                
         {catagorys.map((category,index)=>
            <tbody key={catagorys._id}>
              <tr className='border rounded'>
                <td>{index+1}</td>
               
                <td  className='text-center'>{category?.catagory}</td>
                
                <td className='flex gap-3 text-2xl justify-end'>
                <Link to={`/updatecatagory/${category._id}`}>
            <FaRegEdit/>
            </Link>
            <Link onClick={()=>handleCatagoryDelete(category._id)}>
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
export default ManageCatagory;