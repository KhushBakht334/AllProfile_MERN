import React, {useEffect} from 'react'
import { useAuth } from '../store/auth';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
    const {userLogout}=useAuth();
    useEffect(() => {
        userLogout();
    }, [])
    
  return <Navigate to="/login"/>
}
