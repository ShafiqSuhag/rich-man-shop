import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const currentUser = {}
    const handleLogout =() => {
        alert('handleLogout')
    }
    return (
        <div>
            LogoHere
            <ul>
                <NavLink to="/home">Home</NavLink>
                {
                    !currentUser.email ?
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