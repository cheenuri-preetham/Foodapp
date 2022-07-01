import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined ,
  CopyOutlined ,
  ShoppingCartOutlined,
  LoginOutlined
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import "antd/dist/antd.css"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;
 const Navbar=(props)=>{
  const [collapsed,setCollapsed]=useState(false);
const navigate=useNavigate();
 const  toggle = () => {
    setCollapsed(!collapsed)
  };
  const {foodItem}=useSelector(state=>state.rootReducer)
useEffect(()=>{
  localStorage.setItem("foodItem",JSON.stringify(foodItem))
},[foodItem])
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo"></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="my-5">
            <Menu.Item key="1" icon={<HomeOutlined />} className="my-3">
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="/cart" icon={<ShoppingCartOutlined/>} className="my-3">
              <Link to="/cart">Cart&nbsp;&nbsp;&nbsp;{foodItem.length}</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LoginOutlined />} className="my-3" onClick={()=>{
              localStorage.removeItem("pos-user")
              navigate("/login")
            }}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 5}}>
          <center>
          <h1 className='text-secondary d-flex justify-content-center'>Food Panda</h1>
          </center>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <div className='d-flex'>
            <ShoppingCartOutlined /><h2 className='text-danger' onClick={()=>navigate('/cart')}><a></a></h2>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  
}
export default Navbar