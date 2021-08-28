
import { API_URL } from "../config"

export const getProduct = (sortBy, order, limit) => {
    
    return fetch(`${API_URL}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`)
     .then(res => res.json())
     .then(res => res.products)
     .catch(err => console.error(err))
}