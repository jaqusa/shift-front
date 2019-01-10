import React, { Component } from 'react'
import { Tabs , Timeline } from 'antd';

const TabPane = Tabs.TabPane;



export default class Recarga extends Component {  
    state = {
        user: {}
    }


    render() {
    const { user } = this.state
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if (!loggedUser) this.props.history.push('/login')
    return (

        <Tabs defaultActiveKey="1" >
        <TabPane tab="MEXICO" key="1">
            <Timeline>
                    <Timeline.Item color="green">Realiza el deposito en la cuenta número 0105655099 banco BBVA Bancomer, CLABE Interbancaria 012 180 00105655099 0</Timeline.Item>
                    <Timeline.Item color="green">Espera la confirmación</Timeline.Item>
                    <Timeline.Item color="red">
                    Revisa tú saldo actualizado
                    </Timeline.Item>
                    
            </Timeline>
        
        </TabPane>
        <TabPane tab="PERÚ" key="2">
             <Timeline>
                    <Timeline.Item color="green">Realiza el deposito en la cuenta número 141 3110092177 banco Interbank, Código de Cuenta Interbancario 003 141 013110092177 97</Timeline.Item>
                    <Timeline.Item color="green">Espera la confirmación</Timeline.Item>
                    <Timeline.Item color="red">
                    Revisa tú saldo actualizado
                    </Timeline.Item>
                    
            </Timeline>
        
        </TabPane>
        <TabPane tab="USA" key="3">
            <Timeline>
                    <Timeline.Item color="green">Realiza el deposito en la cuenta número 2353309341312312 Bank of America</Timeline.Item>
                    <Timeline.Item color="green">Espera la confirmación</Timeline.Item>
                    <Timeline.Item color="red">
                    Revisa tú saldo actualizado
                    </Timeline.Item>
                    
            </Timeline>
        
        </TabPane>
      </Tabs>

    )
    }
}


