import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

const SideNavigation = () => {
    let { path, url } = useRouteMatch();
    return (
        <>
           
            
            <div class="py-4 artboard artboard-demo bg-base-200 h-full rounded-none">
            <div class="flex-1 hidden px-2 mx-2 lg:flex">
                <span class="text-lg font-bold">
                    RICH MAN SHOP
                </span>
            </div>
                <ul class="menu py-4 shadow-lg bg-base-100 rounded-box">
                    {/* <li class="menu-title">
                    <span>
                    Menu Title
                    </span>
                    </li>
                */}
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
                            to={`${url}/add-new-product`}
                            className={isActive =>
                                "" + (isActive ? " bordered" : " hover-bordered")
                            }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 mr-2 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Add New Product
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
                            Product List
                        </NavLink>
                        {/* <Link to={`${url}/add-new-product`}>
                       
                       Add New Product
                    </Link> */}
                    </li>
                </ul>
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