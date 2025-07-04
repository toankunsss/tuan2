import React from 'react';
import { Drawer, Menu, Avatar, Typography, Button, Space } from 'antd';
import {
  DashboardOutlined,
  StarOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './SlideBar.module.scss';

const { Text } = Typography;

const Items = [
  { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/vitalTask', icon: <StarOutlined />, label: 'Vital Task' },
  { key: '/task', icon: <UnorderedListOutlined />, label: 'My Task' },
  { key: '/taskcategory', icon: <AppstoreOutlined />, label: 'Task Categories' },
  { key: '/setting', icon: <SettingOutlined />, label: 'Settings' },
  { key: '/help', icon: <QuestionCircleOutlined />, label: 'Help' },
  { key: '/logout', icon: <LogoutOutlined />, label: 'Logout' },
];

const MobileDrawerMenu = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key);
    onClose();
  };

  return (
    <Drawer
      placement="left"
      open={open}
      onClose={onClose}
      width={240}
      bodyStyle={{ padding: 0 }}
      className={style.mobileDrawer}
    >
      <div style={{ padding: 24, textAlign: 'center' }}>
        <Avatar size={64} src="https://i.pinimg.com/736x/95/13/b5/9513b5fe46d6ef5328c320246acbe3e9.jpg" />
        <div style={{ marginTop: 8 }}>
          <Text strong>John Doe</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 12 }}>john.doe@example.com</Text>
        </div>
      </div>
      <Menu
        mode="inline"
        items={Items}
        selectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        style={{ border: 'none' }}
      />
    </Drawer>
  );
};

export default MobileDrawerMenu;
