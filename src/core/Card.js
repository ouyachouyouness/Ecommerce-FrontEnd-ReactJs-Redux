import React from 'react'
import {Link} from 'react-router-dom'

import ShowImage from './ShowImage'
const Card = ({product}) => {
    return (
        <div>
            <div class="card my-2">
                <div class="card-header">
                <h2 className="display-6 mr-2">{product.name}</h2></div>
                <ShowImage item={product} url="product/photo" className="card-img-top"></ShowImage>
                
                <div class="card-body">
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <button class="btn btn-warning mr-2">View Product</button>
                    <button class="btn btn-success my-2">Add to cart</button>
                </div>
            </div> 
        </div>
    )
}

export default Card