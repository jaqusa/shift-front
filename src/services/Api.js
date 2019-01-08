import axios from 'axios'
const urlBack = 'http://localhost:3000/api'



export const loginUser = (user) => {
    return axios.post(urlBack + '/login', user, { withCredentials: true })
        .then(r => r.data)
        .catch(e => e.response)
}

export const signupUser = (user) => {
    return axios.post(urlBack + '/signup', user)
        .then(r => r.data)
        .catch(e => e.response)
}

export const getProfile = () => {
    return axios.get(urlBack + '/profile', { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            console.log(e)
            return e.response

        })
}

export const logOut = () => {
    return axios.get(urlBack + '/logout', { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            console.log(e)
            return e.response

        })
}