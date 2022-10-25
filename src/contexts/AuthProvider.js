import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const test = {name:"tatai"}
    const authInfo = {test}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;