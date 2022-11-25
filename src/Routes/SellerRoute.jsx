import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/context/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <progress className='progress w-56'></progress>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;