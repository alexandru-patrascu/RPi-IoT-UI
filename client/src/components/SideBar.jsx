import {
  ClusterOutlined,
  PieChartOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(['/dashboard']);
  const handleCollapse = (collapsed) => setIsCollapsed(collapsed);

  const handleItemClick = (e) => {
    const { key, keyPath } = e;
    setSelectedKey(keyPath);
    console.log('v', e);
    // TODO: Redirect to key
  };

  return (
    <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapse}>
      <div className="logo">
        <img src="/rpi-logo.png" alt="raspberry-pi-logo" width={64} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey}>
        <Item
          key="/dashboard"
          icon={<PieChartOutlined />}
          onClick={handleItemClick}
        >
          Dashboard
        </Item>
        <SubMenu icon={<ClusterOutlined />} title="Bedroom">
          <Item key="/bedroom/overview" onClick={handleItemClick}>
            Overview
          </Item>
          <Item key="/bedroom/lights" onClick={handleItemClick}>
            Lights
          </Item>
        </SubMenu>
        <SubMenu icon={<TableOutlined />} title="Kitchen">
          <Item key="/kitchen/overview" onClick={handleItemClick}>
            Overview
          </Item>
          <Item key="/kitchen/lights" onClick={handleItemClick}>
            Lights
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
