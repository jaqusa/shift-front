import React, { Component } from 'react'
import { getProfile } from '../../services/Api';
import { Card, message, Button ,Form,Select,Input,Icon } from 'antd';

const FormItem = Form.Item;
const { Option } = Select;
var email

const info = () => {
    message.info('Transferencia Realizada a ' + email);
  };

function handleInput  (e)  {
    
    email = e.target.value
}

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
        <h2>Datos de Envio</h2>
        <Form layout="vertical" >
                        <FormItem
                        >
                            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={handleInput} placeholder="Email" name="email" />
                        </FormItem>
                        <Form.Item>


                      </Form.Item>
                        <FormItem>
                        <Button type="primary" onClick={info}>Enviar</Button>
                        </FormItem>
                </Form>
        
        <div style={{ margin: 5, padding: 5 }}>
            
           
                
        </div>
        </div>
    </Card>
    </div>

    )
    }
}


