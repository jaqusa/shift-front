import React, { Component } from 'react'
import { getProfile, logOut } from '../../services/Api';
import { Card, Button,Avatar } from 'antd';
import { Link } from 'react-router-dom'

const { Meta } = Card;


export default class Profile extends Component {
    state = {
        user: {}
    }

    componentWillUnmount() {
        getProfile()
            .then(user => {
                this.setState({user})
            }).catch(error => {
                console.log(error)
            })
    }

    getLoggedOut = () => {
        logOut().then(user => {
            localStorage.clear()
            this.props.history.push('/')
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        const { user } = this.state
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
        if (!loggedUser) this.props.history.push('/login')
        
        return (
            <div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card
                            style={{ width: 500, margin: 8 }}
                 
                            cover={ <Avatar shape="square" size={64} icon="user" /> }
                
                        >
                          <div style={{ textAlign:"center"}}>
                            <h1>{loggedUser.saldo}  {loggedUser.bank.currency}</h1> 
                            <h2> {loggedUser.bank.name} </h2>
                            <p>{loggedUser.email}</p>
                            <p>{loggedUser.bank.country}</p>
                            <span>{loggedUser.usertype}</span>
                            
                            <div style={{ margin: 5, padding: 5 }}>
                                <Button type="danger"  block> <Link to={`/profile/edit/${loggedUser._id}`}>Editar Cuenta </Link></Button>
                                <Button type="danger" onClick={this.getLoggedOut} block>Logout</Button>
                            </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

