import React, { useEffect, useState} from 'react'
import {getOneProduct} from './ApiCore'

 const Product = (props) => {

    const [product, setProduct] = useState({})

    useEffect(() => {

        let productId = props.match.params.id;
        getOneProduct(productId)
        .then(res => setProduct(res))
        .catch(err => console.log(err))
    }, [props])
    return (
        <div>
            {JSON.stringify(product)}
        </div>
    )
}

export default Product