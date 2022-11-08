import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const googleProvider = new GoogleAuthProvider();

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

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;