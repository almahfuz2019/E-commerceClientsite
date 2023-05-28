import axios from "axios";
import { useEffect, useState } from "react";
 const UseCatagory = () => {
     const [catagorys,setCatagorys]=useState([]);
     const [category,setCategory]=useState("")
     useEffect(()=>{
          fetch("http://localhost:5000/categories")
          .then(res=>res.json())
          .then(data=>setCatagorys(data))
     },[catagorys])
     const handleCatagoryDelete=async(id)=>{
          const proceed=window.confirm("are you sure you want to delete?");
          if(proceed){
               await axios.delete(`http://localhost:5000/catagory/${id}`)
               .then(response=>{
                    if(response.data.deletedCount>0){
                         const deletedremaining=catagorys.filter(note=>note._id !==id);
                         setCatagorys(deletedremaining)
                    }
               })
          }
     }
     
     const handleCategory = (e) => {
          setCategory(e.target.value);
        };
        const HealthCare = () => {
          setCategory("Health Care");
        };
        const BabyCare = () => {
          setCategory("Baby Care");
        };
        const BeautyCare = () => {
          setCategory("Beauty Care");
        };
        const FirstAid = () => {
          setCategory("First Aid");
        };
        const Surgical = () => {
          setCategory("Surgical");
        };
        const Dental = () => {
          setCategory("Dental");
        };
        const Diagnostic = () => {
          setCategory("Diagnostic");
        };
        const Laboratory = () => {
          setCategory("Laboratory");
        };
        const Hospital = () => {
          setCategory("Hospital");
        };
        
     return {catagorys,handleCatagoryDelete,setCategory,Hospital,Laboratory,Diagnostic,Dental,Surgical,FirstAid,BeautyCare,HealthCare,handleCategory,BabyCare,category};
     
};

export default UseCatagory;