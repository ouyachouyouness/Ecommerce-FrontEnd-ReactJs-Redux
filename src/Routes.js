import React from 'react'
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Signin  from './user/Signin';
import Signup  from './user/Signup';
import Home  from './core/Home';
import Menu  from './core/Menu';
import Dashboard from './user/Dashboard';
import AdminDashboard from './user/AdminDashboard';

import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';


const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <PrivateRoute path= '/' exact component= {Home} />
                {/* <AdminRoute path= 'admin/dashboard' exact component= {AdminDashboard} /> */}
                <PrivateRoute path= '/dashboard' exact component= {Dashboard} />
                <Route path= '/signin' exact component= {Signin} />
                <Route path= '/signup' exact component= {Signup} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
