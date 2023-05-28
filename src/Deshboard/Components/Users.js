import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import UserRole from './UserRole';
const Users = () => {
  const [search,setSearch]=useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  useEffect(()=>{
    const url=`http://localhost:5000/searchuser?email=${search}`;
    if(search!==""){
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        usersInfo(data)
      })
    }else if(search===""){
    }
  },[search])
     
     const { isLoading, error, data:usersInfo,refetch } = useQuery( 'users', () =>
     fetch('http://localhost:5000/users',{
          method:"GET",
          headers: {
            'content-type': 'application/json',
              authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
     }).then(res =>
      res.json()))
  if(isLoading){
     return <Loading/>
  }
  if(error){
    return <p>{error}</p>
  }
  
  
     return (
          <div>
             <div className="overflow-x-auto">
          <div className='text-center my-5'><span className='bg-primary rounded p-2 text-white font-bold text-3xl '>Total Users: {usersInfo?.length}</span></div>
          <div className='mx-auto text-center mb-5'>
<input type="text" placeholder="Search here by e-mail" className="input input-bordered input-accent w-full sm:max-w-sm input-sm sm:input-md max-w-xs border border-primary" onChange={handleSearch}/>
</div>

          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>No</th>
                <th>Email</th>
                <th>Make Admin/worker</th>
                <th>Remove Admin/worker</th>
              </tr>
            </thead>
            <tbody>
             {usersInfo.map((user,index)=><UserRole
             key={user._id}
             refetch={refetch}
             user={user}
             index={index}
             >
             </UserRole>)}
            </tbody>
  
          </table>
        </div>
          </div>
     );
}
export default Users;