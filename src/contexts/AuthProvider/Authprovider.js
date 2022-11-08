import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const createUser = (email,photo,password) =>{
     createUserWithEmailAndPassword(auth, email,photo, password);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, createUser =>{
            console.log(createUser);
            setUser(createUser);
        });

        return () =>{
            return unsubscribe();
        }
    },[])

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;