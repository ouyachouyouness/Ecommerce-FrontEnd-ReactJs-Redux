import React, { useState } from 'react'
import Layout from '../../core/Layout'

import { API_URL } from '../../config';

import { isAuthentificated } from '../../auth/helpers';
import toastr from 'toastr';
import "toastr/build/toastr.css";

function AddProduct() {

    const [product, setProduct] = useState({
        photo: '',
        name: '',
        description:'',
        quantity: 0,
        price: 0,
        shipping: false
    })
    const [formData, setFormData] = useState(new FormData());

    const handleChange = (e) => {

       setProduct({[e.target.id]: e.target.value})
    }


    const submitProduct = (e) => {

       e.preventDefault();

       const { user, token } = isAuthentificated();

       fetch(`${API_URL}/product/create/${user._id}`, {
           method: "POST",
           headers: {
               "Accept": "application/json",
               "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
           },
           body: JSON.stringify({product})
       })
       .then(res => res.json())
       .then(res => {
           if(res.error) {
               toastr.warning(res.error, 'Please Check form !', {
                   positionClass: "toast-bottom-left",
               })
           }
           else {
               toastr.success(`Product ${product.name} created`, 'new Product', {
                   positionClass: "toast-bottom-left",
               })

               setProduct({
                photo: '',
                name: '',
                description:'',
                quantity: 0,
                price: 0,
                shipping: false}
               )

             

           }
           setFormData(new FormData())

       })
       .catch(err =>  toastr.error(err, 'Server error !', {
                   positionClass: "toast-bottom-left",
               }))
 
    }

    return (
        <div>
            <Layout 
              title="Product" 
              description="New Product" 
              className="container"
           >
              
              <div className="row">
                  <div className="col-md-6 mx-auto">
                      <form onSubmit={submitProduct}>

                            <div class="input-group">
                                <div class="input-group">
                                    <span class="input-group-text my-3">Upload photo</span>
                                </div>

                                <div class="custom-file">
                                    <input type="file" class="custom-file-input"/>
                                    <label for="" class="custome-fole-label">Product</label>
                                </div>
                            </div>

                           <div className="form-group">
                               <label htmlFor="" className="text-muted "></label>
                               <input value={product.name} required autoFocus placeholder="Add name of Product" onChange={handleChange} type="text" className="form-control"/>
                           </div>

                            <div class="form-group my-3">
                                <label for="description">description</label>
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control"></textarea>
                            </div>
                            <div class="form-group my-3">
                                <label for="quantity">quantity</label>
                                <input type="number" class=" form-control" id="quantity"/>
                            </div>
                            <div class="form-group my-3">
                                <label for="price">Price</label>
                                <input type="number" class="form-control" name= "price"/>
                            </div>
                            <div class="form-group my-3">
                                <label for="category">category</label>
                                <select name="category" id="category" class="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="form-check my-3">
                                <input class="form-check-input" type="checkbox" value="" id="shipping"/>
                                <label class="form-check-label" for="shippin">
                                    shipping
                                </label>
                            </div>

                          
                          <button className="my-5 btn btn-outline-primary">New Product</button>
                      </form>
                  </div>
              </div>
              
           </Layout>
        </div>
    )
}

export default AddProduct