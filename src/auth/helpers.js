 
export const isAuthentificated = () => {
    const jwt = localStorage.getItem('jwt_info')

    if(jwt){

        return JSON.parse(jwt)
    }

    return false
}

