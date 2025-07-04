import TaskItem from './TaskItem';
import styles from './TaskList.module.scss';
import { Button, Space } from 'antd';
import { LuListTodo } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { theme } from 'antd';


const TaskList = ({ tasks, title }) => {

  const { token } = theme.useToken();
  return (
    <div className={styles.taskList}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        }}>
        <Space align='center' style={{ color: token.colorPrimary, border: 'none' }}>
            <LuListTodo />
            To-Do
        </Space>
        <Button style={{ color: token.colorPrimary }} >
            <FaPlus />
            Thêm mới
        </Button>
        </div>
        <div className={styles.title}>{title} <span>Today</span></div>
        <div className={styles.list_container}>
            <div className={styles.list}>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default TaskList;
