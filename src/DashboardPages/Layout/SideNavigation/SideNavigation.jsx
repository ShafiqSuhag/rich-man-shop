import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useServerConfig from '../../../hooks/useServerConfig';

const SideNavigation = () => {
    const serverUrl = useServerConfig()
    const { currentUser } = useAuth()
    let { path, url } = useRouteMatch();
    const [isUserAdmin, setIsUserAdmin] = useState(false);


    useEffect(() => {
        if (currentUser?.email) {
            axios.post(serverUrl + "/find-user-role", { email: currentUser?.email })
                .then(response => {
                    console.log(response);
                    console.log(response.data.isAdmin);
                    setIsUserAdmin(response.data.isAdmin);
                })
        }
      

    }, [currentUser])



    return (
        <>


            <div>
                <div class="text-lg font-bold text-center">
                    RICH MAN SHOP
                </div>
                <div className="menu  bg-base-200 h-full ">
                    {/* conditional menu  */}
                    {
                        isUserAdmin ?
                            <>
                                <li class="">
                                    <NavLink
                                        to={`${url}/add-new-product`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        New Product
                                    </NavLink>
                                    {/* <Link to={`${url}/add-new-product`}>
                       
                       Add New Product
                    </Link> */}
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/product-list`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Manage Products
                                    </NavLink>
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/make-admin`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Make Admin
                                    </NavLink>
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/manage-all-orders`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Manage All Orders
                                    </NavLink>
                                </li>
                            </>

                            :

                            <>
                                <li class="bordered">
                                    <Link to={`${url}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>

                                <li class="">
                                    <NavLink
                                        to={`${url}/my-orders`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        My Orders
                                    </NavLink>
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/pay`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Pay
                                    </NavLink>
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/review-list`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Review list
                                    </NavLink>
                                </li>
                                <li class="">
                                    <NavLink
                                        to={`${url}/add-review`}
                                        className={isActive =>
                                            "" + (isActive ? " bordered" : " hover-bordered")
                                        }>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        New Review
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* conditional menu  */}
                </div>
            </div>

           
        </>
        // <div className="w-2/12 sticky">

        //     <ul class="list-disc">
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}`}>Dashboard</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/add-new-product`}>Add New Product</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/product-list`}>Product List</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/make-admin`}>Make Admin</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/manage-orders`}>Manage Orders</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/my-orders`}>My Orders</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/payment`}>Payment</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/my-reviews`}>Review List</Link>
        //         </li>
        //         <li className="left-sidebar-nav-link">
        //             <Link className="block" to={`${url}/add-review`}>Add Review</Link>
        //         </li>

        //     </ul>

        // </div>

    );
};

export default SideNavigation;