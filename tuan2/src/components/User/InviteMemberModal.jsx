import React, { useState } from 'react';
import {
  Modal, Input, Button, List, Avatar, Space,
  Typography, Tooltip, message, Dropdown, Tag
} from 'antd';
import { CopyOutlined, MoreOutlined } from '@ant-design/icons';
import styles from './InviteMemberModal.module.scss';

const { Text } = Typography;

const initialMembers = [
  { name: 'Upashna Gurung', email: 'userone99@gmail.com', avatar: 'https://randomuser.me/api/portraits/women/1.jpg', role: 'Owner' },
  { name: 'Jeremy Lee', email: 'jeremylee99@gmail.com', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', role: 'Editor' },
  { name: 'Thomas Park', email: 'thomaspark@gmail.com', avatar: 'https://randomuser.me/api/portraits/men/3.jpg', role: 'Viewer' },
  { name: 'Rachel Takahasi', email: 'racheltaka@gmail.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg', role: 'Editor' },
];

const InviteMemberModal = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [members, setMembers] = useState(initialMembers);
  const projectLink = 'https://sharelink.yourapp.com/54e5b9';

  const handleCopy = () => {
    navigator.clipboard.writeText(projectLink);
    message.success('Copied project link!');
  };

  const handleMenuClick = (memberIndex) => ({ key }) => {
    const newMembers = [...members];
    if (key === 'edit') {
      newMembers[memberIndex].role = 'Editor';
    } else if (key === 'owner') {
      newMembers[memberIndex].role = 'Owner';
    }
    setMembers(newMembers);
    message.success(`Updated role to ${newMembers[memberIndex].role}`);
  };

  const getMenu = (index) => ({
    items: [
      { label: 'Edit', key: 'edit' },
      { label: 'Owner', key: 'owner' }
    ],
    onClick: handleMenuClick(index)
  });

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={480}
      className={styles.inviteModal}
    >
      <Space direction="vertical" style={{ width: '100%' }} size={24}>
        <Space align="center" style={{ justifyContent: 'space-between', width: '100%' }}>
          <Text strong>Send an invite to a new member</Text>
        </Space>

        <Space style={{ width: '100%' }}>
          <Input
            placeholder="newsignup99@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ flex: 1 }}
          />
          <Button type="primary">Send Invite</Button>
        </Space>

        <div>
          <Text strong>Members</Text>
          <List
            itemLayout="horizontal"
            dataSource={members}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Dropdown
                    key="dropdown"
                    menu={getMenu(index)}
                    trigger={['click']}
                  >
                    <MoreOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
                  </Dropdown>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<span>{item.name}</span>}
                  description={<span style={{ fontSize: 12 }}>{item.email}</span>}
                />
                <Tag color={item.role === 'Owner' ? 'green' : 'blue'}>
                  {item.role}
                </Tag>
              </List.Item>
            )}
          />
        </div>

        <div style={{ background: '#fafafa', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Input value={projectLink} readOnly style={{ flex: 1, background: 'transparent', border: 'none', fontWeight: 500 }} />
          <Tooltip title="Copy Link">
            <Button icon={<CopyOutlined />} onClick={handleCopy} type="primary">Copy Link</Button>
          </Tooltip>
        </div>
      </Space>
    </Modal>
  );
};

export default InviteMemberModal;
