import { Row, Col, Typography, Flex , Button} from 'antd';
import TaskList from '../components/Tasks/TaskList';
import CompletedTask from '../components/Tasks/CompletedTask';
import TaskStatusChart from '../components/Tasks/TaskStatusChart';
import styles from './Dashboard.module.scss';
import { Avatar, Divider, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { IoMdPersonAdd } from "react-icons/io";
import InviteMemberModal from '../components/User/InviteMemberModal';
import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

// Mock user
const user = {
  name: 'John',
};

// Mock data
const tasks = [
  { id: 1, title: 'Design UI', status: 'Completed', priority: 'High', dueDate: '2025-07-05' },
  { id: 2, title: 'Setup Backend', status: 'In Progress', priority: 'Moderate', dueDate: '2025-07-10' },
  { id: 3, title: 'Write Docs', status: 'Not Started', priority: 'Low', dueDate: '2025-07-12' },
  { id: 4, title: 'Test Features', status: 'Completed', priority: 'High', dueDate: '2025-07-03' },
  { id: 5, title: 'Deploy App', status: 'In Progress', priority: 'Moderate', dueDate: '2025-07-08' },
  { id: 6, title: 'Deploy App', status: 'In Progress', priority: 'Moderate', dueDate: '2025-07-08' },
  { id: 7, title: 'Deploy App', status: 'In Progress', priority: 'Moderate', dueDate: '2025-07-08' },
  { id: 8, title: 'Deploy App', status: 'In Progress', priority: 'Moderate', dueDate: '2025-07-08' },

];

const stats = {
  completed: tasks.filter(t => t.status === 'Completed').length,
  inProgress: tasks.filter(t => t.status === 'In Progress').length,
  notStarted: tasks.filter(t => t.status === 'Not Started').length,
};

const Dashboard = () => {
  const [inviteOpen, setInviteOpen] = useState(false);
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <Title level={2} className={styles.welcome}>Welcome back, {user.name}!</Title>
        <Flex align='center' gap={10} className={styles.headerActions}>
          <Avatar.Group 
            shape="square" 
            className={styles.avatarGroup}
            size="large"
            maxCount={2}
            maxPopoverPlacement="bottom"
          >
            <Avatar style={{ backgroundColor: '#fde3cf' }}>A</Avatar>
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
          </Avatar.Group>
          <Button type="primary" ghost onClick={() => setInviteOpen(true)}>
            <IoMdPersonAdd />
            <span className={styles.buttonText}>Invite</span>
          </Button>
        </Flex>
      </div>

      <Row gutter={[16, 16]} className={styles.dashboardContent}>
        <Col xs={24} lg={12}>
          <TaskList
            title="My Tasks"
            tasks={tasks.filter(t => t.status !== 'Completed')}
          />
        </Col>
        <Col xs={24} lg={12}>
          <TaskStatusChart stats={stats} />
          <CompletedTask tasks={tasks.filter(t => t.status === 'Completed')} />
        </Col>
      </Row>
      <InviteMemberModal open={inviteOpen} onClose={() => setInviteOpen(false)} />
    </div>
  );
};

export default Dashboard;