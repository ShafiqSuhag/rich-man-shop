import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Header.css";


const Header = () => {
    const { currentUser, logout } = useAuth()
    const handleLogout = () => {
        logout()
    }



    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
    const handleMobileMenu = () => {
        if (isMobileMenuActive) {
            setIsMobileMenuActive(false)
        } else {
            setIsMobileMenuActive(true)
        }
    }
    return (
        <div>


            <nav className="flex justify-between items-center my-2 mx-5">
                <div className="  lg:text-3xl text-gray-500 font-semibold ">
                    RICH MAN SHOP
                </div>
                <i class="fas fa-bars lg:hidden" onClick={handleMobileMenu}></i>
                <div className=" py-2  flex items-center   large-menu">
                    <NavLink to="/" className="nav-link-minimal">Home</NavLink>
                    <NavLink to="/explore-more-products" className="nav-link-minimal">Explore Sneakers</NavLink>
                    {
                        !currentUser?.email ?
                            <NavLink to="/login" className="nav-link-minimal">Login</NavLink>
                            :
                            <>
                                <div class="avatar online ml-3">
                                    <div class="rounded-full w-10 h-10">
                                        <img src={currentUser?.photoURL ? currentUser?.photoURL : "./images/profile-pic.jpg"} alt=" profile " />
                                    </div>
                                </div>


                                <div class="dropdown dropdown-end mx-3">
                                    <div tabindex="0" class="btn btn-ghost rounded-btn">My Account</div>
                                    <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <p className="mx-auto">Welcom , {currentUser.displayName}</p>
                                        </li>

                                        <li className="my-1">
                                            <NavLink to="/dashboard" className="nav-link-minimal">Dashboard</NavLink>
                                        </li>
                                        <li className="my-1">
                                            <button onClick={handleLogout} className="nav-link-minimal">Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </>
                    }
                </div>
            </nav>
            {/* mobile menu  */}
            <div className={`absolute z-10 w-full  ${isMobileMenuActive ? "    " : "hidden"}`}>
                <ul className="bg-gray-200 px-1 py-1 shadow rounded">
                    <NavLink to="/home" className="px-2 py-2 bg-gray-100 mb-1 block">Home</NavLink>
                    <NavLink to="/explore-more-products" className="px-2 py-2 bg-gray-100 mb-1 block">Explore Sneakers</NavLink>

                    {
                        !currentUser?.email ?
                            <NavLink to="/login" className="px-2 py-2 bg-gray-100 mb-1 block">Login</NavLink>
                            :
                            <>

                                <li className="px-2 py-2 bg-gray-100 mb-1 block">
                                    <div className="flex justify-between items-center">
                                        <p className="">Welcom , {currentUser.displayName}</p>
                                        <div class="avatar online ml-3">
                                            <div class="rounded-full w-10 h-10">
                                                <img src={currentUser?.photoURL ? currentUser?.photoURL : "./images/profile-pic.jpg"} alt=" profile " />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <NavLink to="/dashboard" className="px-2 py-2 bg-gray-100 mb-1 block">Dashboard</NavLink>
                                <li className="px-2 py-2 bg-gray-100 mb-1 block">
                                    <button onClick={handleLogout} className="px-2 py-2 bg-gray-100 mb-1 block">Logout</button>
                                </li>


                            </>
                    }

                </ul>
            </div>
            {/* mobile menu  */}



        </div>
    );
};

export default Header;