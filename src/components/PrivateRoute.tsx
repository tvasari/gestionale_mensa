import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authentication from 'utils/authentication';
import Navbar from 'components/Navbar/Navbar';

const PrivateRoute = ({ component, ...rest }: any) => {
  return(
    <Route 
      {...rest} 
      render={
        ({location}) => {
          return authentication.isAuthenticated
          ? <Fragment> <Navbar />{ component } </Fragment> 
          : <Redirect to={{pathname: "/accedi", state: { from: location }}}/>
        }
      }
    />
  );
}

export default PrivateRoute;