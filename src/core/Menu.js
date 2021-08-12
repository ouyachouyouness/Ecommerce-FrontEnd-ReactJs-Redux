import React from 'react'

import { Link, withRouter } from 'react-router-dom'

const isActive = (history, path) => {
    if(history.location.pathname == path){
        return {color: '#ffbf00'}
    }else{
        return {color: '#fff'}
    }
}

const  Menu = (props) => {
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
                    <li className="nav-item">
                        <Link style={isActive(props.history, '/')} className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                   
                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                        <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connexion</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link style={isActive(props.history, '/signup')} className="nav-link " to="/signup" tabindex="-1" >Register</Link>
                    </li>
                </ul>
                
                </div>
            </div>
            </nav>
        </div>
    )
}

export default withRouter(Menu)
