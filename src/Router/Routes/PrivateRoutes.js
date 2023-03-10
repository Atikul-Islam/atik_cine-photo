import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/Authprovider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1>loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to ='/login' state={{from: location}}></Navigate>
        </div>
    );
};

export default PrivateRoutes;