import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import axios from 'axios'
import auth from '../../firebase.init';
import Notfound from '../../Components/Notfound';
const UseUserSpacifiqData = () => {
     const [user]=useAuthState(auth);
     const[usdata,setUsdata]=useState([]);
     const[shoppingCartItemLoading,setshoppingCartItemLoading]=useState(true);
    const fetchCarts  = async() => {
     try{
      setshoppingCartItemLoading(true);
          const res = await axios.get(`http://localhost:5000/cartdata?useremail=${user?.email}`)
          setUsdata(res.data)
          setshoppingCartItemLoading(false)
        }catch(err){
        }
      }
      useEffect(()=>{
        fetchCarts() 
     },[user,usdata])
     const handleUserDelete=async(id)=>{
        const proceed=window.confirm("are you sure you want to delete?");
        if(proceed){
             await axios.delete(`http://localhost:5000/cartdatadelete/${id}`)
             .then(response=>{
               if(response.data.deletedCount>0){
                    const deletedremaining=usdata.filter(note=>note._id !==id);
                    setUsdata(deletedremaining)
               }
          })
             
        }
   }
   const { isLoading:productLoading, error, data:products } = useQuery( 'repoaData', () =>
     fetch('http://localhost:5000/usercartdata').then(res =>
       res.json()
 )
   )
   if(productLoading ){
     return <Loading/>
   }
   if(error){
     return <Notfound/>
   }
   let total=0;
   let subTotal=0;
   let shippingCharge=0;
   if(Array.isArray(usdata)){
     for(let products of usdata){
       subTotal+=parseInt(products.product.price)*(products.productQuentity);
       shippingCharge=100;
       total=subTotal+shippingCharge;
     }
   }
     return {usdata,handleUserDelete,total,productLoading,products,subTotal,error,shippingCharge,shoppingCartItemLoading};
};
export default UseUserSpacifiqData;