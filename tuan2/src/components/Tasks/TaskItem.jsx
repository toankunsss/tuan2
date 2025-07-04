import React from 'react';
import { Card, Tag, Dropdown, Radio, Image, Space } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { CgMore } from 'react-icons/cg';
import styles from './TaskItem.module.scss';
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";


const statusMap = {
  Completed: { color: 'green', icon: <CheckCircleOutlined /> },
  'In Progress': { color: 'blue', icon: <ClockCircleOutlined /> },
  'Not Started': { color: 'red', icon: <CloseCircleOutlined /> },
};

const sampleTask = {
  title: 'Presentation on Final Product',
  description:
    'Make sure everything is functioning and all the necessities are properly met...',
  status: 'In Progress',
  priority: 'Moderate',
  createdDate: '20/06/2023',
  image: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
};


const menuItems = [
  { label: 'Edit', key: 'edit', icon: <FiEdit/> },
  { label: 'Delete', key: 'delete', icon: <MdDeleteForever /> },
];

const TaskItem = () => {
  const { title, description, image, status, priority, createdDate } = sampleTask;

  return (
    <Card bordered={false} className={styles.taskCard}>
      <div className={styles.wrapper}>
        <Radio className={styles.radio} />

        <div className={styles.content}>
          <div className={styles.header}>
            <h4 className={styles.title}>{title}</h4>
          </div>
          <Space>
            <p className={styles.description}>{description}</p>
            <Image width={100} src={image} preview={false} style={{borderRadius: '10px'}}/>      
          </Space>


          <div className={styles.footer}>
            <span>
              <strong>Priority:</strong> <span className={styles.priority}>{priority}</span>
            </span>
            <span>
              <strong>Status:</strong>
              <Tag icon={statusMap[status].icon} color={statusMap[status].color}>
                {status}
              </Tag>
            </span>
            <span className={styles.date}>Created on: {createdDate}</span>
          </div>
        </div>
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
              <CgMore className={styles.moreIcon} />
        </Dropdown>
      </div>
    </Card>
  );
};

export default TaskItem;
