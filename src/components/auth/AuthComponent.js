import React, { Component } from 'react'
import Signup from './Signup';
import Login from './Login';
import toastr from 'toastr'
import { loginUser, signupUser } from '../../services/Api';

class AuthComponent extends Component {
    state = {
        user: {}
    }

    handleSignup = (e) => {
        const { user } = this.state
        e.preventDefault()
        signupUser(user)
            .then(r => {
                toastr.success('Registered')
                this.props.history.push('/login')
            }).catch(e => {
                toastr.error(e)
            })
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { user } = this.state

        loginUser(user)
            .then(r => {
                localStorage.setItem('loggedUser', JSON.stringify(r))
                toastr.success('Login Success')
                this.props.history.push('/profile')

            }).catch(e => {
                toastr.error(e)
            })
    }
    handleInput = (e) => {
        const { user } = this.state
        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    render() {
        const { pathname } = this.props.location
        const { handleInput, handleSignup, handleLogin } = this
        return (
            <div className="d-flex" style={{ height: '100vh' }}>
                {pathname === '/login' ?
                    <Login handleInput={handleInput} handleLogin={handleLogin} /> :
                    <Signup handleInput={handleInput} handleSignup={handleSignup} />
                }
            </div>
        )
    }
}

export default AuthComponent