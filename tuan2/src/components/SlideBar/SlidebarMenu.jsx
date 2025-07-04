import { Layout, Menu, Avatar, Typography, Space, theme } from 'antd'
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
import style from './SlideBar.module.scss'

const { Sider } = Layout;
const { Text } = Typography;

const UserProfile = () => (
  <div className={style.userProfile}>
    <Space direction="vertical" align="center">
      <Avatar size={90} src="https://i.pinimg.com/736x/95/13/b5/9513b5fe46d6ef5328c320246acbe3e9.jpg" className={style.avatar}/>
      <Text strong style={{color: 'white'}}>John Doe</Text>
      <Text type="secondary" style={{color: 'white'}}>john.doe@example.com</Text>
    </Space>
  </div>
);

const Items = [
  { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
  { key: '/vitalTask', icon: <StarOutlined />, label: 'Vital Task' },
  { key: '/task', icon: <UnorderedListOutlined />, label: 'My Task' },
  { key: '/taskcategory', icon: <AppstoreOutlined />, label: 'Task Categories' },
  { key: '/setting', icon: <SettingOutlined />, label: 'Settings' },
  { key: '/help', icon: <QuestionCircleOutlined />, label: 'Help' },
  { key: '/logout', icon: <LogoutOutlined />, label: 'Logout' },
];


const SlideBarMenu = () => {
  const { token } = theme.useToken(); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };
  return (
    <Sider width={280} className={style.sider}>
      <div className={style.siderBar} style={{backgroundColor: token.colorPrimary}}>
        <UserProfile />
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={Items}
          className={style.menu}
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          style={{backgroundColor: token.colorPrimary}}
        />
      </div>
    </Sider>
  )
}

export default SlideBarMenu
