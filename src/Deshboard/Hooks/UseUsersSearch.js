import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseUsersSearch = () => {
     const [search,setSearch]=useState("");
     const[orderLoading,setOrderLoading]=useState(true);
     const[orders,setOrders]=useState([]);
     const loadOrders = async() => {
          try{
            // productsorders
            setOrderLoading(true)
            const response=await axios.get(`http://localhost:5000/productsorders`,{
              headers: {
                'content-type': 'application/json',
                  authorization:`Bearer ${localStorage.getItem('accessToken')}`
             
            }
            })
           
                setOrders(response.data.products)
              setOrderLoading(false)
            }
            catch(error){
            };
          }
     const handleSearch = (e) => {
          e.preventDefault();
          setSearch(e.target.value);
        };
        useEffect(()=>{
          const url=`http://localhost:5000/ordersearch?email=${search}`;
          
          if(search!==""){
          
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
              setOrders(data)
            })
          }else if(search===""){
            loadOrders()
          }
        },[search])
     return (
          <div>
               
          </div>
     );
};

export default UseUsersSearch;