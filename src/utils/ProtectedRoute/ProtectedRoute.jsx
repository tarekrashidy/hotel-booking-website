import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ children }) => {
    function hasJWT() {
        let flag = false;
  
        localStorage.getItem("token") ? flag=true : flag=false
       
        return flag
    }
    if (true) {
        return <>{children}</>
    } else {
        return <Navigate to='/login' />
    }

}

export default ProtectedRoute