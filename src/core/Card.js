import React from 'react'
import {Link} from 'react-router-dom'

import ShowImage from './ShowImage'
const Card = ({product}) => {
    return (
        <div>
            <div class="card  mb-2 px-2">
                <div class="card-header">
                <h4 className="display-6 mr-2"><span class="badge bg-light text-dark">{product.name}</span></h4></div>
                <ShowImage item={product} url="product/photo" className="card-img-top"></ShowImage>
                
                <div class="card-body">
                    <p>{product.description}</p>
                    <div>
                    <span class="badge bg-info text-dark">${product.price}</span><br/>
                    <span class="badge rounded-pill bg-secondary">{product.category.name}</span><br/>
                    </div>
                    <Link to={`product/${product._id}`}>
                    <button class="btn btn-warning mx-2">View</button>
                    </Link>
                    <button class="btn btn-success my-2">Add to cart</button>
                </div>
            </div> 
        </div>
    )
}

export default Card