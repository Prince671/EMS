import React from 'react'
import { createContext } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)


    useEffect(() => {
    setLocalStorage(userData)
    const {employees}=getLocalStorage();
    setUserData({employees});
    // console.log("user ka data hai :", employees);
    }, [])
    
    
  return (
    
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider