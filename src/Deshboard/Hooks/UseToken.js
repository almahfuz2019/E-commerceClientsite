import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const UseToken = (user) => {
    const [token,setToken]=useState('');
    useEffect(()=>{
     const email=user?.user?.email;
     const currentUser={email:email};
     if(email){
          const url = `http://localhost:5000/user/${email}`;
     fetch(url, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(currentUser)
     })
         .then(res => res.json())
         .then(data => {
          const accessToken=data?.token;
          localStorage.setItem('accessToken',accessToken)
          setToken(accessToken)
          // alert("success")
        //   toast.success('Update Successfully', {
        //     position: "top-right",
        //     autoClose:1000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: false,
        //     progress: undefined,
        //     theme: "colored",
        //     });
                
         })
     }
    },[user]);
    return [token]
};

export default UseToken;