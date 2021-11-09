import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AddNewProduct from '../Products/AddNewProduct/AddNewProduct';
import SideNavigation from '../SideNavigation/SideNavigation';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="flex ">
            <div className="bg-red-300">
                <SideNavigation></SideNavigation>
            </div>
            <div className="bg-green-300">

                <Switch>
                    <Route exact path={path}>
                        <h3>Home page conent </h3>
                    </Route>
                    <Route path={`${path}/add-new-product`}>
                        <AddNewProduct></AddNewProduct>
                    </Route>
                    <Route path={`${path}/*`}>
                        <h3>Not Found  </h3>
                    </Route>
                    {/* <Route path={`${path}/:topicId`}>
                        <h4>Another page content</h4>
                    </Route> */}
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;