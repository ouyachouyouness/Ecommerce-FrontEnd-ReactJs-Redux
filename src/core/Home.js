import React ,{useState, useEffect} from 'react'
import Layout from './Layout'
import { getProduct} from './ApiCore'
import Card from './Card'
import Search from './Search'

function Home() {

    const [productsBestSellers, setProductsBestSellers] = useState([])
    const [productsArrivals, setProductsArrivals] = useState([])

    const loadBestSellers = () => {
        getProduct({sortBy: 'sold', order: 'desc', limit: 6})
        .then(products => setProductsBestSellers(products))
    }

    const loadArrivals = () => {
        getProduct({sortBy: 'createAt', order: 'desc',limit: 3})
        .then(products => setProductsArrivals(products))
    }

    useEffect(() => {
        loadArrivals()
        loadBestSellers()
    }, [])
    
    return (
        <div>
            <Layout
             title="Home page" 
             description = "Node react ecommerce"
              className="container">
                
                <Search/>

                <hr/>

                  <h1> Arrival Producs</h1>
                    <div className="row mt-3 mb-5">
                        {productsArrivals.map((product, i) => (
                            
                            <div key={i} class="col-md-4">
                                <Card product={product}></Card>
                            </div>
                        
                        ))}
                    </div>
                  <hr/>

                  <h1>Best Sellers</h1>
                  <div className="row">
                        {productsBestSellers.map((product, i) => (
                            
                            <div key={i} class="col-md-4">
                                <Card product={product}></Card>
                            </div>
                        
                        ))}
                    </div>
            </Layout>
        </div>
    )
}

export default Home
