import React ,{useState, useEffect} from 'react'
import Layout from './Layout'
import { getProduct} from './ApiCore'

function Home() {

    const [productsBestSellers, setProductsBestSellers] = useState([])
    const [productsArrivals, setProductsArrivals] = useState([])

    const loadBestSellers = () => {
        getProduct('sold', 'desc', 1)
        .then(products => setProductsBestSellers(products))
    }

    const loadArrivals = () => {
        getProduct('createAt', 'desc', 1)
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


                  <h1> Arrival Producs</h1>
                  {JSON.stringify(productsArrivals)}
                  
                  <hr/>

                  <h1>Best Sellers</h1>
                  {JSON.stringify(productsBestSellers)}
            </Layout>
        </div>
    )
}

export default Home
