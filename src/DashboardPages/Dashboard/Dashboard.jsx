import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import Payment from '../Payment/Payment';
import AddNewProduct from '../Products/AddNewProduct/AddNewProduct';
import ProductList from '../Products/ProductList/ProductList';
import ReviewAdd from '../Review/ReviewAdd/ReviewAdd';
import ReviewList from '../Review/ReviewList/ReviewList';
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
                    <Route path={`${path}/product-list`}>
                        <ProductList></ProductList>
                    </Route>
                    <Route path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/my-reviews`}>
                        <ReviewList></ReviewList>
                    </Route>
                    <Route path={`${path}/add-review`}>
                        <ReviewAdd></ReviewAdd>
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