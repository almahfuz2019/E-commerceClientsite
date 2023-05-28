import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import UseWorker from '../Deshboard/Hooks/UseWorker';
import auth from '../firebase.init';
const RequireWorker = ({children}) => {
     const [user, loading] = useAuthState(auth);
     const [worker,workerLoading]=UseWorker(user);
     const location=useLocation();
     if (loading || workerLoading) {
          return <Loading/>
        }
        if(!user || !worker){
          return <Navigate to="/login" state={{ from: location }} replace></Navigate>
        }
     return children;
};
export default RequireWorker;