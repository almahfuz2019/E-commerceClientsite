import { useEffect, useState } from "react";
const UseWorker = (user) => {
     const [worker,setWorker]=useState(false);
     const [workerLoading,setWorkerLoading]=useState(true);
     
     useEffect(()=>{
          const email=user?.email;
     if(email){
          const url = `http://localhost:5000/worker/${email}`;
     fetch(url, {
         method: 'GET',
         headers: {
             'content-type': 'application/json',
           
               authorization:`Bearer ${localStorage.getItem('accessToken')}`
          
         }
     })
         .then(res => res.json())
         .then(data => {
          setWorker(data.worker);
          setWorkerLoading(false)
     })
}

     },[user])
     return [worker,workerLoading]
};
export default UseWorker;