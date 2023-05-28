import React from 'react';
import Loading from '../Components/Loading';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../Deshboard/Hooks/UseToken';
const SocialLogin = () => {
     const navigate=useNavigate();
     let location = useLocation();
   let from = location.state?.from?.pathname || "/";
     const [signInWithGoogle, GoogleUser, GoogleLoading, GoogleError] = useSignInWithGoogle(auth);
     const [token]=UseToken(GoogleUser);
     if (GoogleUser) {
          navigate(from, { replace: true });
        }
     if (token) {
          navigate(from, { replace: true });
        }
        let googleError;
  if(GoogleError){
googleError=<p className='text-red-700'>{GoogleError?.message}</p>
  }
        if (GoogleLoading) {
          return<Loading/>;
        }
        if(token){
          navigate("/")
        }
     return (
          <div>
               {googleError}
               <button className="flex w-full items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100 border border-primary border-opacity-30" onClick={()=> signInWithGoogle()}>
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold" >Sign up with Google</h1>
                    </button>
          </div>
     );
};

export default SocialLogin;