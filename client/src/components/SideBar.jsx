import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = (collapsed) => setIsCollapsed(collapsed);

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
      <div className="logo">
        <DesktopOutlined />
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Item key="1" icon={<PieChartOutlined />}>
          Dashboard
        </Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="Bedroom">
          <Item key="2">Tom</Item>
          <Item key="3">Bill</Item>
          <Item key="4">Alex</Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Kitchen">
          <Item key="5">Team 1</Item>
          <Item key="6">Team 2</Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
