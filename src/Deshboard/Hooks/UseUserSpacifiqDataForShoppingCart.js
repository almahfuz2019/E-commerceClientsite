import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import axios from 'axios'
import auth from '../../firebase.init';
const UseUserSpacifiqData = () => {
     const [user]=useAuthState(auth);
     const[userCartData,setUsdata]=useState([]);
    const fetchCarts  = async() => {
     try{
          const res = await axios.get(`http://localhost:5000/cartdata?useremail=${user.email}`)
          setUsdata(res.data)
     }catch(err){
      }
    }
     useEffect(()=>{
          fetchCarts() 
     },[userCartData])
     const handleUserDelete=(id)=>{
       try{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               axios.delete(`http://localhost:5000/cartdatadelete/${id}`)
               .then(response=>{
                    if(response.data.deletedCount>0){
                         const remaining=userCartData.filter(note=>note._id !==id);
                         setUsdata(remaining)
                    }
               })
          }
       }catch(err){

      }
   }
   const { isLoading:productLoading, error, data:products } = useQuery( 'repoaData', () =>
     fetch('http://localhost:5000/usercartdata').then(res =>
       res.json()
 )
   )
   if(productLoading){
     return <Loading/>
   }
   if(error){
     return <p>{error}</p>
   }
   let total=0;
   let subTotal=0;
   let shippingCharge=0;
   if(Array.isArray(userCartData)){
     for(let products of userCartData){
       subTotal+=parseInt(products.product.price)*(products.productQuentity);
       shippingCharge=100;
       total=subTotal+shippingCharge;
     }
   }
     return { userCartData,handleUserDelete,total,productLoading,products,subTotal,error,shippingCharge};
};
export default UseUserSpacifiqData;