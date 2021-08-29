import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getCategories, filterProducts} from './ApiCore'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import Card from './Card'

const Shop = ()  => {

    const [categories, setCategories] = useState([])
    const [limit] = useState(3)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [productFiltred, setproductFiltred] = useState([])


    const [myFilters, setMyFilters] = useState({
        category: [],
        price: []
    })

    useEffect(() => {
        getCategories()
        .then(res => setCategories(res))

        filterProducts(skip, limit, myFilters)
        .then(res => {
            setproductFiltred(res)
            setSize(res.length)
            
        })
    }, [myFilters])

    const handleFilters = (data, filterBy) => {

        setMyFilters({...myFilters, [filterBy] : data})

        

        //console.log('SHOP', data, filterBy);

    }
    
    const loadMore = () => {

        const toSkip = skip + limit;

        filterProducts(toSkip, limit, myFilters)
        .then(res => {
            console.log(res);
            setproductFiltred([...productFiltred,...res])
            setSkip(0)
            setSize(res.length)

        })
    }

    const buttonToLoadMore = () => {
        return (

            size > 0 &&
             size >= limit &&
            (
            <div classNam="text-center">

                <button onClick={loadMore} className="btn btn-outline-success">Load More</button>
            </div>
            

            )
        )
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

                            {buttonToLoadMore()}
                    </div>
                </div>

              </Layout>

        </div>
    )
}

export default Shop
