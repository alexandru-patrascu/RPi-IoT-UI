import {
  ClusterOutlined,
  PieChartOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const { SubMenu, Item } = Menu;
const { Sider } = Layout;

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(['/dashboard']);
  let history = useHistory();

  const handleCollapse = (collapsed) => setIsCollapsed(collapsed);

  const handleClick = (e) => {
    const { key, keyPath } = e;

    setSelectedKey(keyPath);
    history.push(key);
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
          onClick={handleClick}
        >
          Dashboard
        </Item>
        <SubMenu icon={<ClusterOutlined />} title="Bedroom">
          <Item key="/bedroom" onClick={handleClick}>
            Overview
          </Item>
          <Item key="/bedroom/lights" onClick={handleClick}>
            Lights
          </Item>
        </SubMenu>
        <SubMenu icon={<TableOutlined />} title="Kitchen">
          <Item key="/kitchen/overview" onClick={handleClick}>
            Overview
          </Item>
          <Item key="/kitchen/lights" onClick={handleClick}>
            Lights
          </Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
