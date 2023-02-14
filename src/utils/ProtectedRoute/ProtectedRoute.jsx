import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom"; 
const ProtectedRoute = ({ children }) => {

    const { isLogedIn } = useSelector((state) => state.auth);

    if (isLogedIn==true) {
        return <>{children}</>
    } else if(isLogedIn == false) {
        return <Navigate to='/Login' />
    }

}

export default ProtectedRoute