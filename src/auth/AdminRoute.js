import React , { Component}  from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthentificated } from "./helpers";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (isAuthentificated() && isAuthentificated().user.role) === 1 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;