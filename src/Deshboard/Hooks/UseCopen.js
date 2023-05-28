import axios from 'axios';
import React, { useEffect, useState } from 'react';
const UseCopen = () => {
     const [copone,setCopone]=useState([]);
     useEffect(()=>{
          fetch("http://localhost:5000/copones")
          .then(res=>res.json())
          .then(data=>setCopone(data))
     },[])
     const handleCatagoryDelete=id=>{
          const proceed=window.confirm("Are you sure you want to delete it?");
          if(proceed){
               
               axios.delete(`http://localhost:5000/copone/${id}`)
               .then(response => {
                    if(response.data.deletedCount>0){
                         const remaining=copone.filter(cla=>cla._id !==id);
                         setCopone(remaining)
                    }
                  })
                  .catch(error => {
                  });
          }
     }
     return {copone,handleCatagoryDelete};
};
export default UseCopen;