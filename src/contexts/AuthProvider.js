import React from 'react';
import { createContext } from 'react';
import app from '../firebase/firebse.config';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
  
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
   
    const handleGithubAuthenTication = ()=>{
        return signInWithPopup(auth , gitHubProvider)
    }
    const handleGoogleAuthantiCation = () =>{
        return signInWithPopup(auth , googleProvider)
    }
    
    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }
   
    const login = (email , password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email , password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    } , [])


    const authInfo = {handleGoogleAuthantiCation , handleGithubAuthenTication ,createUser , login , user ,logOut , loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;