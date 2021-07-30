import React from 'react'
import Layout from '../core/Layout'

const Signup = () =>  {

    const form = () =>(
        <div>
                <div className="form-group">
                    <label htmlfor="Name" className="text-muted">Name</label>
                    <input type="text" className="form-control" id="Name" />

                </div>
                <div className="form-group">
                    <label for="email" className="text-muted">email</label>
                    <input type="email" className="form-control" id="email" />

                </div>
                <div className="form-group">
                    <label for="password" className="text-muted">password</label>
                    <input type="text" className="form-control" id="password" />
                </div>

                <button className="btn btn-lg btn-block btn-outline-success">Sign Up</button>
        </div>
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
