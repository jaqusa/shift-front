import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Sider, Content } = Layout;



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{ height: '100vh' }}>
          <Sider style={{ overflowY: 'scroll' }}>
            <Menu
              defaultSelectedKeys={['sub1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100vh' }}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span> <Link style={{textDecoration:"none"}} to='/'>SHIFT</Link> </span>}>
                <MenuItemGroup key="g1" >
                  {/* <Menu.Item key="1"><Link to='/'>Welcome Page</Link></Menu.Item> */}
                  <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/signup'>Signup</Link></Menu.Item>
                  {/* <Menu.Item key="3"><Link to='/profile'>Profile</Link></Menu.Item> */}
                </MenuItemGroup>
              </SubMenu>

            </Menu>
          </Sider>
          <Layout>
            <Content><Routes /></Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App
