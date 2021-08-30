import React from 'react'
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Signin  from './user/Signin';
import Signup  from './user/Signup';
import Home  from './core/Home';
import Shop  from './core/Shop';
import Menu  from './core/Menu';
import Dashboard from './user/Dashboard';
import AdminDashboard from './user/AdminDashboard';

import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import AddCategory from './admin/category/AddCategory';
import AddProduct from './admin/product/AddProduct';
import Product from './core/Product';

const Routes = () => {
    return (
        <BrowserRouter>
        <Menu/>
            <Switch>
                <PrivateRoute path= '/' exact component= {Home} />
                <PrivateRoute path= '/Shop' exact component= {Shop} />
                <AdminRoute path= '/admin/dashboard' exact component= {AdminDashboard} /> 
                <AdminRoute path= '/create/category' exact component= {AddCategory} /> 
                <AdminRoute path= '/create/product' exact component= {AddProduct} /> 
                <PrivateRoute path= '/dashboard' exact component= {Dashboard} />
                <Route path= '/signin' exact component= {Signin} />
                <Route path= '/signup' exact component= {Signup} />
                <Route path= '/product/:id' exact component= {Product} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
