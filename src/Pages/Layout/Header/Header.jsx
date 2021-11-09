import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
const {currentUser, logout} = useAuth()
    const handleLogout =() => {
        alert('handleLogout')
        logout()

    }
    return (
        <div>
            LogoHere
            <ul>
                <NavLink to="/home">Home</NavLink>
                {
                    !currentUser?.email ?
                            <NavLink to="/login">Login</NavLink>
                        :
                        <>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                }

            </ul>


        </div>
    );
};

export default Header;