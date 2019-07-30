import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
// import { createUseStyles } from 'react-jss'
import Routes from '../Routes';
import './index.css';

const { Header, Sider, Content } = Layout;

const BasicLayout = ({...props}) => {
  // const classes = useStyles()
  const classes = {}
  const [collapsed, setCollapsed] = useState(false);

  function toggle() {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <Layout className={classes.layout} id="components-layout-demo-custom-trigger">
      <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>用户管理</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>文章管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>账号信息</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={classes.trigger + ' trigger'}
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          Content
          <Routes {...props} />
        </Content>
      </Layout>
    </Layout>
  );
}

// const useStyles = createUseStyles({
//   layout: {
//     minHeight: '100vh',
//   },
//   trigger: {
//     fontSize: '18px',
//     lineHeight: '64px',
//     padding: '0 24px',
//     cursor: 'pointer',
//     transition: 'color 0.3s',
//     '&:hover': {
//       color: '#1890ff',
//     },
//   },
//   logo: {
//     height: '32px',
//     background: 'rgba(255, 255, 255, 0.2)',
//     margin: '16px',
//   }
// });

export default BasicLayout;
