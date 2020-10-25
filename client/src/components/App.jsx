import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = (collapsed) => setIsCollapsed(collapsed);
  // if (isLoading) return <LoadingIndicator />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
        <div className="logo">
          <DesktopOutlined />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Bedroom">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Kitchen">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content>
          <div style={{ padding: 24, minHeight: 360 }}>Bill is a cat.</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Raspberry Pi CMS ©2020 Created by Alexandru Patrascu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
