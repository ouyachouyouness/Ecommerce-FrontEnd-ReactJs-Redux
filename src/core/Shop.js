import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getCategories, filterProducts} from './ApiCore'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import Card from './Card'

const Shop = ()  => {

    const [categories, setCategories] = useState([])
    const [limit, setLimit] = useState(12)
    const [skip, setSkip] = useState(0)
    const [productFiltred, setproductFiltred] = useState([])


    const [myFilters, setMyFilters] = useState({
        category: [],
        price: []
    })

    useEffect(() => {
        getCategories()
        .then(res => setCategories(res))

        filterProducts(skip, limit, myFilters)
        .then(res => setproductFiltred(res))
    }, [myFilters])

    const handleFilters = (data, filterBy) => {

        setMyFilters({...myFilters, [filterBy] : data})

        

        //console.log('SHOP', data, filterBy);

    }


    return (
        <div>
            <Layout
             title="Shop page" 
             description = "choice your favourite product in our store "
              className="container">

                <div class="row">
                    <div class="col-md-3">
                        <FilterByCategory
                         categories={categories}
                         handleFilters={(data) => handleFilters(data, 'category')}
                         
                         />
                         <hr/>
                         <FilterByPrice handleFilters={data => handleFilters(data, 'price')} />
                    </div>
                    <div className="col-md-9">
                    <h1>Best Sellers</h1>
                        <div className="row">
                                {productFiltred.map((product, i) => (
                                    
                                    <div key={product._id} class="col-md-4">
                                        <Card product={product}></Card>
                                    </div>
                                
                                ))}
                            </div>
                    </div>
                </div>

              </Layout>

        </div>
    )
}

export default Shop
