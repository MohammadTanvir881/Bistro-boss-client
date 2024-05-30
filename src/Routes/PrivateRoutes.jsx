import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    console.log(location)
   const {user , loading} = useContext(AuthContext)
   if(loading){
    return <div className="h-[100vh] flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
   }
   if(user){
    return children;
   }

   return <Navigate to="/login" state={location?.pathname}></Navigate>
   
};

export default PrivateRoutes;