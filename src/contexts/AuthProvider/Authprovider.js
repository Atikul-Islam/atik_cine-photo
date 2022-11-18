import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, createUser =>{
            console.log(createUser);
            setUser(createUser);
            setLoading(false);
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

    const updateUser = profile => {
        setLoading(true)
        return updateProfile(auth, createUser, profile)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        updateUser,
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