import {createContext, useContext, useState, useEffect} from 'react';

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [user, setUser]=useState('');
    const[token, setToken]=useState(localStorage.getItem("token"));
    const isLoggedIn=token;
    const authToken=`Bearer ${token}`;
    const storeTokenInLS=(token)=>{
        setToken(token);
        return localStorage.setItem("token", token);
    }
    const userLogout=(token)=>{
        setToken("");
        return localStorage.removeItem("token", token);
    }
    const userAuthenticate=async()=>{
        try {
            const response=await fetch("http://127.0.0.1:2000/api/auth/userdata",{
                method:"GET",
                headers:{
                    Authorization:authToken
                }
            })
            const data=await response.json();
            console.log(data);
            setUser(data);
        } catch (error) {
         console.log(error);   
        }
    }
    useEffect(() => {
        userAuthenticate();
    }, [])
    
    return <AuthContext.Provider value={{storeTokenInLS,userLogout, isLoggedIn, user,authToken}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth=()=>{
    return useContext(AuthContext);
}
