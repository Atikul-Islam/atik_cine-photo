import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../../firebase/firebase.config';


const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);

    const createUser = (email,password) =>{
     createUserWithEmailAndPassword(auth, email, password);
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

    const authInfo ={
        user,
        loading,
        createUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;