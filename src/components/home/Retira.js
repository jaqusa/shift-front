import React, { Component } from 'react'
import { getProfile } from '../../services/Api';
import { Card, message, Button } from 'antd';


const info = () => {
    message.info('Retiro en Proceso, espere el mail confirmación');
  };



export default class Recarga extends Component {  
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

    render() {
    const { user } = this.state
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if (!loggedUser) this.props.history.push('/login')
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card
        style={{ width: 500, margin: 8 }}
        

    >
        <div style={{ textAlign:"center"}}>

        <h1> Saldo Actual: {loggedUser.saldo} {loggedUser.bank.currency}</h1> 
        <h2>Datos de Retiro</h2>
        <p> Nombre: {loggedUser.bank.name} </p>
        <p>Correo: {loggedUser.email}</p>
        <p>Pais: {loggedUser.bank.country}</p>
        <p>Banco: {loggedUser.bank.bank}</p>
        <p>Numero de Cuenta: {loggedUser.bank.number}</p>
        
        <div style={{ margin: 5, padding: 5 }}>
            
            <Button type="primary" onClick={info}>Retirar</Button>
                
        </div>
        </div>
    </Card>
    </div>

    )
    }
}


