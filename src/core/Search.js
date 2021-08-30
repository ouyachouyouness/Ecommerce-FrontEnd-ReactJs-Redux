import React, { useEffect, useState} from 'react'

import { getCategories, getProduct } from './ApiCore'
import Card from './Card'

const Search = () => {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [searchData, setSearchData] = useState({search:'', category:''})

    const handlechange = (e) => {
        setSearchData({...searchData, [e.target.id] : e.target.value})
    }


    const resultMessage = () => {

        return products && products.length > 0 &&  (
            <h3>Found {products.length} product(s) </h3>
        )
    }

    const searchSubmit = (e)=>{

        e.preventDefault()

        let { search, category} = searchData

        if(search || category){
            getProduct({search: search || undefined, category})
            .then(res => setProducts(res))
        }else{

            setProducts([])
        }
    
    }

        
   
    useEffect(() => {

        getCategories()
        .then(categories => setCategories(categories))
    }, [])
    
    return (
        <div>
            <form onSubmit={searchSubmit}>
                <div class="input-group input-group-lg">
                    <div class="input-group-prepend">
                        {/* <select id="category" class="btn mt-4 ml-2">
                            <option value="">Select a category</option>
                            
                            {categories.map((category, i) => {
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            })}
                        </select> */}
                           <select onChange={handlechange} id="category" className="btn mt-4">
                           <option value="">Select a Category</option>
                           {categories.map((category, i) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                           ))}
                       </select>
                    </div>
                    <input onChange={handlechange} type="search" id="search" class="form-control mt-4 mx-4"/>
                    <div class="input-group-append">
                            <button class="btn mt-4 ">Search</button>
                    </div>
                    
                </div>

                
            </form>

            <hr/>

            {resultMessage()}

            <div class="row"> 
                {products.map((product, i) => (
                    
                    <div key={product._id} class="col-md-4">
                        <Card product={product}/> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search