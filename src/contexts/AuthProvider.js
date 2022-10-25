import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebse.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import { useState } from 'react';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
  
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleAuthantiCation = () =>{
        return signInWithPopup(auth , googleProvider)
    }
    
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }
   


    const authInfo = {handleGoogleAuthantiCation , createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;