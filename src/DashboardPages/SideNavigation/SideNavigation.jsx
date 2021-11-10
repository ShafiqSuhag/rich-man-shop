import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            left side navigation
            <ul class="list-disc">
                <li>
                    <Link to={`${url}`}>Dashboard</Link>
                </li>
                <li>
                    <Link to={`${url}/add-new-product`}>Add New Product</Link>
                </li>
                <li>
                    <Link to={`${url}/product-list`}>Product List</Link>
                </li>
                <li>
                    <Link to={`${url}/make-admin`}>Make Admin</Link>
                </li>
                <li>
                    <Link to={`${url}/manage-orders`}>Manage Orders</Link>
                </li>
                <li>
                    <Link to={`${url}/my-orders`}>My Orders</Link>
                </li>
                <li>
                    <Link to={`${url}/payment`}>Payment</Link>
                </li>
                <li>
                    <Link to={`${url}/my-reviews`}>Review List</Link>
                </li>
                <li>
                    <Link to={`${url}/add-review`}>Add Review</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default SideNavigation;