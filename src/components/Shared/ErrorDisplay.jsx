import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ErrorDisplay = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <p className="text-red-600">Something went wrong!!!</p>
            <p className="text-red-500">{error.statusText || error.message}</p>
            <h2 className="text-3xl">Please <button className='btn btn-outline btn-sm mt-2 px-2 py-0 rounded-lg' onClick={handleLogOut}>Log Out</button></h2>
        </div>
    );
};

export default ErrorDisplay;