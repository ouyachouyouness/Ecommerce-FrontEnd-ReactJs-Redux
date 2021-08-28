
import { API_URL } from "../config"

export const getProduct = (sortBy, order, limit) => {
    
    return fetch(`${API_URL}/product?sortBy=${sortBy}&order=${order}&limit=${limit}`)
     .then(res => res.json())
     .then(res => res.products)
     .catch(err => console.error(err))
}


export const getCategories = () => {

    return fetch(`${API_URL}/category`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(res => res.categories)
    .catch(err => console.error(err))

 }

 export const filterProducts = (skip, limit, filters) => {

    const data = {
        filters
    }
    return fetch(`${API_URL}/product/search`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res.products)
    .catch(err => console.error(err))

 }