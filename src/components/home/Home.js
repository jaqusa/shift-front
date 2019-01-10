import React, {Component} from 'react'
import banner from '../../img/javierbanner-01.png'
import { width } from 'window-size';
import { Card} from 'antd';

const { Meta } = Card;

class Home extends Component {
    
  render() {
    return (
      <div>
             <div >
                 <img  style={{width:"420px"}} src={"http://shift.com/static/images/shift-logo-fb-4-25-16.png"} />
            </div>
            <div>
            <img  style={{width:"100%"}} src={"https://i.ibb.co/ngKVLHK/javierbanner-01.png"} />
            </div>
            <div style={{background: 'white', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', padding:'30px'}}>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://i.ibb.co/pwcQ2wv/Recarga.png" />}
                >
                    <Meta
                    title="RECARGA"
                    description="Recarga tú saldo depositando en la cuenta bancaria de nuestro agente en tú país "
                    />
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://i.ibb.co/pK190cq/Transfiere.png" />}
                >
                    <Meta
                    title="TRANSFIERE"
                    description="Cuando tú deposito sea confirmado y tú saldo actualizado, realiza una transferencia inmediata a cualquier usuario a través de la plataforma "
                    />
                </Card>

                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://i.ibb.co/0Jvd4k6/Retira.png" />}
                >
                    <Meta
                    title="RETIRA"
                    description="Retira el dinero (directo a la cuenta bancaria) a través de nuestros agentes en el país de destino"
                    />
                </Card>
            </div>
      </div>
    );
  }
}

export default Home
