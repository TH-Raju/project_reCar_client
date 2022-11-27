import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))

    }

    const menuItems = <React.Fragment>
        <li className='font-bold text-lg'><Link to="/home">Home</Link></li>
        <li className='font-bold text-lg'><Link to="/products">Products</Link></li>
        <li className='font-bold text-lg'><Link to="/blog">Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li className='font-bold text-lg'><Link to="/dashboard">Dashboard</Link></li>
                    <li><button className='btn btn-outline btn-sm mt-3 px-2 py-0 rounded-lg' onClick={handleLogOut}>Log Out</button></li>
                </>
                :
                <>
                    <li><Link to="/login"><button className='btn btn-outline btn-sm mt-2 px-2 py-0 rounded-lg'>Log in</button></Link></li>
                    <li><Link to="/register"><button className='btn btn-outline btn-sm mt-2 px-2 py-0 rounded-lg'>Register</button></Link></li>
                </>

        }

    </React.Fragment>
    return (
        <div className='sticky top-0 z-30'>
            <div className="navbar bg-base-100 flex lg:justify-around">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl font-bold">Resale Handing</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        {menuItems}

                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden navbar-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;