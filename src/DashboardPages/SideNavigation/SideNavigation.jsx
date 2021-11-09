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
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                    {/* <Link to={`${url}/props-v-state`}>Props v. State</Link> */}
                </li>
            </ul>
        </div>
    );
};

export default SideNavigation;