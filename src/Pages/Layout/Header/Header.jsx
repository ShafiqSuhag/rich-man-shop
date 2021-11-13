import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { currentUser, logout } = useAuth()
    const handleLogout = () => {
        alert('handleLogout')
        logout()

    }
    return (
        <div>
            <nav className="flex justify-between items-center my-2">
                <div>
                    TheBlackSmith
                </div>
                <div className=" py-2  ">
                    <NavLink to="/home" className="nav-link">Home</NavLink>
                    <NavLink to="/checkout" className="nav-link">Checkout</NavLink>

                    <NavLink to="/explore-more-products" className="nav-link">Explore More Products</NavLink>
                    {
                        !currentUser?.email ?
                            <NavLink to="/login"  className="nav-link">Login</NavLink>
                            :
                            <>
                                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                                <button onClick={handleLogout} className="nav-link">Logout</button>
                            </>
                    }
                </div>

            </nav>
            

        </div>
    );
};

export default Header;