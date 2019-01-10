import React, { Component } from 'react'
import { updateProfile} from '../../services/Api';
import { Link } from 'react-router-dom'
import { Layout } from "antd";

const { Content} = Layout;


export default class editProfile extends Component {
    state = {
        user: {}
    }

    componentWillUnmount() {
      updateProfile()
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
          <Layout>
          <Content>
            <div className="div_form_principal">
              <div className="div_form_product">
                <form method="POST" onSubmit={this.updateProfile}>
                  <label>Nombre:</label>
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={this.handleText}
                  />
                  <label>Apellido:</label>
                  <input
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={this.handleText}
                  />
  
                  <label>Telefono:</label>
                  <input
                    type="number"
                    name="telephones"
                    value={user.telephones}
                    onChange={this.handleText}
                  />
  
                  <label>Imagen:</label>
                  <img src={user.photoURL} alt="user" style={{ height: 100 }} />
                  <input type="file" onChange={this.handleImage} name="photo" />
  
                  <label>Direccion de la calle 1:</label>
                  <input
                    type="text"
                    name="directionLine1"
                    value={user.directionLine1}
                    onChange={this.handleText}
                  />
  
                  <label>Direccion de la calle 2:</label>
                  <input
                    type="text"
                    name="directionLine2"
                    value={user.directionLine2}
                    onChange={this.handleText}
                  />
  
                  <label>Ciudad:</label>
                  <input
                    type="text"
                    name="city"
                    value={user.city}
                    onChange={this.handleText}
                  />
                  <label>Estado:</label>
                  <input
                    type="text"
                    name="state"
                    value={user.state}
                    onChange={this.handleText}
                  />
                  <label>Código postal:</label>
                  <input
                    type="number"
                    name="cp"
                    value={user.cp}
                    onChange={this.handleText}
                  />
                  <input type="submit" name="submit" />
                </form>
              </div>
            </div>
          </Content>
        </Layout>
        )
    }
}

