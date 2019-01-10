import React, { Component } from 'react'
import Signup from './Signup';
import Login from './Login'
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
                if(r.status>300){
                  toastr.error(r.data.message)
                }else{
                  localStorage.setItem('loggedUser', JSON.stringify(r))
                  toastr.success('Login Success')
                  this.props.history.push(`/profile/${r._id}`)
                }                
            }).catch(e => {
                toastr.error(e)
            })
    }
    handleInput = (e) => {
  
        const { user } = this.state
        user[e.target.name] = e.target.value
        this.setState({ user })
    }
    handleSelect=(value)=>{
      const { user } = this.state
        user["usertype"] = value
        this.setState({ user })
    }
    handleSelectCountry=(value)=>{
        const { user } = this.state
          user["country"] = value
          this.setState({ user })
      }

    render() {
        const { pathname } = this.props.location
        const { handleInput, handleSignup, handleLogin, handleSelect,handleSelectCountry  } = this
        return (
            <div className="d-flex" style={{ height: '100vh' }}>
                {pathname === '/login' ?
                    <Login handleInput={handleInput} handleLogin={handleLogin} /> :
                    <Signup handleInput={handleInput} handleSignup={handleSignup} handleSelect={handleSelect} handleSelectCountry={handleSelectCountry}/>
                }
            </div>
        )
    }
}

export default AuthComponent