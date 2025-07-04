import { Input, Space, Button, Flex } from "antd"
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { Layout} from 'antd';
import style from './Header.module.scss'
import MobileDrawerMenu from "../SlideBar/MobileDrawerMenu";
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout
const { Search } = Input

const Topbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Header className={style.header}>
      <Flex justify='space-between' className={style.flexHeader}>
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 22 }} />}
          onClick={() => setDrawerOpen(true)}
          className={style.mobileMenuBtn}
        />
        <div className={style.logo}><span>TO</span>DO</div>
          <div className={style.calendar}>
            <div className={style.iconAction}>
              <Button type="primary" size="middle" className={style.buttonAction}><FaCalendarAlt className={style.icon} /></Button>
              <Button type="primary" size="middle" className={style.buttonAction}><CiBellOn className={style.icon} /></Button>
            </div>
          <div className={style.time}>Tuesday</div>
       </div>
      </Flex>
      <div className={style.search}>
        <Search placeholder="Search your task here" size="middle" enterButton style={{ width: '100%' }} />
      </div>
      <div className={style.calendar}>
        <div className={style.iconAction}>
          <Button type="primary" size="middle" className={style.buttonAction}><FaCalendarAlt className={style.icon} /></Button>
          <Button type="primary" size="middle" className={style.buttonAction}><CiBellOn className={style.icon} /></Button>
        </div>
        <div className={style.time}>Tuesday</div>
      </div>
      <MobileDrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Header>
  )
}

export default Topbar
