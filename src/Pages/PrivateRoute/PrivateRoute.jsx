import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // const location = useLocation()
    const {currentUser, isLoading} =useAuth()
    console.log("loading--",isLoading)
    if(isLoading){
        
        return "Loading...."
      }
    
    console.log('inprivate route ', currentUser)
    return (
        <Route
            {...rest}
            render={
                ({ location }) => currentUser?.email ?
                    children
                    :
                    <Redirect to={{ pathname: '/login' , state: {form:location} }}></Redirect>
            }
        />
    );
};

export default PrivateRoute;