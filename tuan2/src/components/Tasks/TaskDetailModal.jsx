import React, { useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, Button, Space } from 'antd';
import styles from './TaskDetailModal.module.scss';
import { formatToday } from '../../utils/formatDate';

const { Option } = Select;
const { TextArea } = Input;

const TaskDetailModal = ({ visible, task, onSave, onDelete, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (task) {
      form.setFieldsValue({
        ...task,
        dueDate: task.dueDate ? formatToday()  : null,
      });
    } else {
      form.resetFields();
    }
  }, [task, form]);

  const handleSave = () => {
    form.validateFields()
      .then(values => {
        onSave({
          ...task, // Keep existing task properties like id
          ...values,
          dueDate: values.dueDate ? values.dueDate.format('YYYY-MM-DD') : null,
        });
        form.resetFields();
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleDelete = () => {
    onDelete(task.id);
    form.resetFields();
  };

  return (
    <Modal
      title={task ? 'Edit Task' : 'Add New Task'}
      visible={visible}
      onCancel={onCancel}
      footer={null} // Custom footer
      centered
      className={styles.taskDetailModal}
    >
      <Form
        form={form}
        layout="vertical"
        name="task_form"
        initialValues={{ status: 'Not Started', priority: 'Low' }}
      >
        <Form.Item
          name="title"
          label="Task Title"
          rules={[{ required: true, message: 'Please input the task title!' }]}
        >
          <Input placeholder="Enter task title" />
        </Form.Item>

        <Form.Item
          name="description"
          label="Description"
        >
          <TextArea rows={4} placeholder="Enter task description" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Please select a status!' }]}
        >
          <Select placeholder="Select status">
            <Option value="Not Started">Not Started</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="Completed">Completed</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: 'Please select a priority!' }]}
        >
          <Select placeholder="Select priority">
            <Option value="High">High</Option>
            <Option value="Moderate">Moderate</Option>
            <Option value="Low">Low</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dueDate"
          label="Due Date"
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Space className={styles.formActions}>
            {task && ( // Show delete button only for existing tasks
              <Button danger onClick={handleDelete}>
                Delete
              </Button>
            )}
            <Button type="primary" onClick={handleSave}>
              Save Task
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default TaskDetailModal;