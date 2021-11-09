import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    // const location = useLocation()
    const auth = {}
    return (
        <Route
            {...rest}
            render={
                ({ location }) => auth.user ?
                    children
                    :
                    <Redirect to={{ pathname: '/login' , state: {form:location} }}></Redirect>
            }
        />
    );
};

export default PrivateRoute;