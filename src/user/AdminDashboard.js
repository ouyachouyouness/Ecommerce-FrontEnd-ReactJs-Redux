// import React, { Fragment} from 'react'

// import Layout from './../core/Layout'

// import  {isAuthentificated} from './../auth/helpers'

// import { Link } from 'react-router-dom'

// function AdminDashboard() {

//     const { user: { name, email, role} } = isAuthentificated()

//     const adminLinks = () => {
//         return (
//         <div className="card">
//         <div className="card-body">
//             <h className="card-header">User Information</h>
//             <ul className="list-group list-group-flush">

//                     <li className="list-group-item">{name}</li>
//                     <li className="list-group-item">{email}</li>
//                     <li className="list-group-item">{role ? 'Admin': 'User'}</li>
               
//             </ul>
//         </div>
//     </div>
//         )}

 

//     const adminInfo = () => {
//         return (
//             <div className="card">
//         <div className="card-body">
//             <h className="card-header">User Links</h>
//             <ul className="list-group list-group-flush">
//                     <li className="list-group-item">
//                         <Link className="nav-link " to= "/category/create" >Create category</Link>
//                     </li>

//                     <li className="list-group-item">
//                         <Link className="nav-link " to= "/product/create" >Create Product</Link>

//                     </li>

                  
                
//             </ul>
//         </div>
//     </div>
//         )
//     }
//     return (
//         <Fragment>
//             <Layout
//                 title = "Dashbord"
//                 description={`Welecome ${name} `}
//                 className= "container"
//             >
// <div className="row">
// <div className="col-md-3">
//    { adminLinks()}
// </div>
// <div className="col-md-9">
//     {adminInfo()}
    
// </div>

// </div>

//             </Layout>
//         </Fragment>
//     )
// }

// export default AdminDashboard

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Layout from './../core/Layout'

import { isAuthentificated } from './../auth/helpers'

function AdminDashboard() {

    const { user: { name, email, role } } = isAuthentificated()


    const adminInfo = () => {

        return (

            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">User INFORMATION</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{name}</li>
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{role ? 'Admin' : 'User'}</li>
                                </ul>
                            </div>
                        </div>
        )
    }


    const adminLinks = () => {

        return (
            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">User Links</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/create/category">Create category</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/create/product">Create product</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
        )
    }

    return (
        <Fragment>
            <Layout
                title="Dashboard"
                description={`Welcome, ${ name }`}
                className="container"
            >

                <div className="row">
                    <div className="col-md-4">
                        {adminLinks()}
                    </div>
                    <div className="col-md-8">
                        {adminInfo()}
                       
                    </div>

                 
                </div>

            </Layout>
        </Fragment>
    )
}

export default AdminDashboard