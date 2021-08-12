import React, { useState } from 'react'
import Layout from '../core/Layout'
import {API_URL} from './../config'

const Signup = e =>  {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
            setUser({
                ...user, 
                [e.target.id]: e.target.value
            })
    }

    const submitSignup = e => {
        e.preventDefault();

        fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"

            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => console.log(user))
        .catch(err => console.error(err))
    }

    const form = () =>(
        <form onSubmit = {submitSignup}>
                <div className="form-group">
                    <label htmlfor="Name" className="text-muted">Name</label>
                    <input onChange = {handleChange} type="text" className="form-control" id="name" />

                </div>
                <div className="form-group">
                    <label for="email" className="text-muted">email</label>
                    <input onChange = {handleChange} type="email" className="form-control" id="email" />

                </div>
                <div className="form-group">
                    <label for="password" className="text-muted">password</label>
                    <input onChange = {handleChange} type="text" className="form-control" id="password" />
                </div>

                <button className="btn btn-lg btn-block btn-outline-success">Sign Up</button>

                {
                    JSON.stringify(user)
                }
        </form>
    )
    return (
        <div>
            <Layout
             title="Sign Up" 
             description = "Sign Up Node react ecommerce"
              className="container">
                  
                  
                  <div class="row">
                      <div className="col-md-6.mx-auto">
                        { form() }

                      </div>
                  </div>
                  
                  
            </Layout>


        </div>
    )
}

export default Signup
