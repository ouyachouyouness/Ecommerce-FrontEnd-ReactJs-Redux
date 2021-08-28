import React, { Fragment } from 'react'
import {API_URL} from './../config'

import { Link, withRouter } from 'react-router-dom'
import toastr from 'toastr';
import "toastr/build/toastr.css";
import { isAuthentificated } from './../auth/helpers';

const isActive = (history, path) => {
    if(history.location.pathname == path){
        return {color: '#ffbf00'}
    }else{
        return {color: '#fff'}
    }
}

const  Menu = (props) => {

    const signout = () => {

        fetch(`${API_URL}/signout`)
        .then(() => {
            toastr.info('User signout ', 'next time', {
                positionClass: "toast-bottom-left",
            })

            localStorage.removeItem('jwt_info')

            props.history.push('/signin')
        } )
        .catch()
    }

   
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ecommerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

               
                    <Fragment>
                        <li className="nav-item">
                            <Link style={isActive(props.history, '/')} className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={isActive(props.history, '/Shop')} className="nav-link active" aria-current="page" to="/Shop">Shop</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link style={isActive(props.history, '/dashboard')}
                                className="nav-link active" 
                                to = '/dashboard'
                                >
                                Dashboard
                            </Link>
                        </li> */}
                        <li className="nav-item active">
                        <Link 
                            style={isActive(props.history, '/dashboard')} 
                            className="nav-link" 
                            to={`${isAuthentificated() && isAuthentificated().user.role === 1 ? '/admin' : ''}/dashboard`}
                            >
                                dashboard
                        </Link>
                    </li>
                     </Fragment>
                

                   
                   
                </ul>
                <ul className="navbar-nav ml-auto">

                { !isAuthentificated() && (
                    <Fragment>
                    <li className="nav-item">
                        <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connexion</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link style={isActive(props.history, '/signup')} className="nav-link " to="/signup" tabindex="-1" >Register</Link>
                    </li>
                    </Fragment>
                ) }

                    {isAuthentificated() && (
                    <li className="nav-item">
                        <span className="nav-link " style = {{ cursor: 'pointer'}} onClick= {signout} tabindex="-1" >SignOut</span>
                    </li>
                    )}
                </ul>
                
                </div>
            </div>
            </nav>
        </div>
    )
}

export default withRouter(Menu)
