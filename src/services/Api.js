import axios from 'axios'
const urlBack = 'http://localhost:3000/api'
//const urlBack = 'https://shiftjaqusaapp.herokuapp.com/api'


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

export const logOut = () => {
    return axios.get(urlBack + '/logout', { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            return e.response

        })
}

export const getProfile = id => {
    return axios.get(urlBack + '/profile/' + id, { withCredentials: true })
        .then(r => r.data)
        .catch(e => {
            return e.response

        })
}

export const updateProfile = user => {
    return axios.put(urlBack + "/profile/edit/" + user._id, { withCredentials: true })
      .then(r => r.data)
      .catch(e => e.response);
  };
  

