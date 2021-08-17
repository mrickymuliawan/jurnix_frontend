import { Layout, Menu } from 'antd'
import React from 'react'
import logo from '../images/logo.png'
import { AreaChartOutlined, BarsOutlined, BookOutlined, LogoutOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
const { Sider, Content } = Layout

function AdminLayout({ children }) {
  const location = useLocation()

  return (
    <Layout>
      <Sider style={{ height: '100vh' }}>
        <img src={logo} alt="" width='100%' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={location.pathname}>
          <Menu.Item key='/dashboard' icon={<AreaChartOutlined />}>
            <Link to='/dashboard'>
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key='/account' icon={<BarsOutlined />}>
            <Link to='/account'>
              Account
            </Link>
          </Menu.Item>
          <Menu.Item key='/history' icon={<BookOutlined />}>
            <Link to='/history'>
              History
            </Link>
          </Menu.Item>
          <Menu.Item key='/logout' icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Content style={{ height: '100vh', overflow: 'auto', padding: 16, }}>
        <div style={{ background: 'white', padding: 16 }}>
          {children}
        </div>
      </Content>
    </Layout >
  )
}

export default AdminLayout
