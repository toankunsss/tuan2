import { Outlet } from 'react-router-dom';
import Topbar from '../components/Header/Topbar';
import SlideBarMenu from '../components/SlideBar/SlidebarMenu';
import { Layout, ConfigProvider } from 'antd';

const { Header, Content, Sider } = Layout;

const MainLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF4C61',
          borderRadius: 8,
          fontFamily: 'Inter, sans-serif',
          
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Topbar />
        <Layout>
          <SlideBarMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                padding: '10px',
                margin: 0,
                maxHeight: 'calc(100vh - 64px - 60px)',
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;