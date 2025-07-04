import { Progress, Card, Space } from 'antd';
import styles from './TaskStatusChart.module.scss';
import { GoDotFill } from "react-icons/go";


const TaskStatusChart = ({ stats }) => {
  const total = stats.completed + stats.inProgress + stats.notStarted;
  return (
    <Card title="Task Status" className={styles.statusCard} bordered={false} >
      <Space size='middle'>
        <Space direction='vertical'>
          <Progress
            type="circle"
            percent={total ? Math.round((stats.completed / total) * 100) : 0}
            format={() => `${stats.completed} / ${total}`}
            strokeColor="#05A301"
            trailColor="#D9D9D9"
            strokeWidth={12}
          />
          <span className={styles.completed}> <GoDotFill className={styles.dot}/>Completed: {stats.completed}</span>
        </Space>
        <Space direction='vertical'>
          <Progress
            type="circle"
            percent={total ? Math.round((stats.inProgress / total) * 100) : 0}
            format={() => `${stats.inProgress} / ${total}`}
            trailColor="#D9D9D9"
            strokeWidth={12}
          />
          <span className={styles.inProgress}><GoDotFill /> In Progress: {stats.inProgress}</span>
        </Space>
        <Space direction='vertical'>
          <Progress
            type="circle"
            percent={total ? Math.round((stats.notStarted / total) * 100) : 0}
            format={() => `${stats.notStarted} / ${total}`}
            strokeColor="#F21E1E"
            strokeWidth={12}
            trailColor="#D9D9D9" 
          />
          <span className={styles.notStarted}><GoDotFill className={styles.dot} /> Not Started: {stats.notStarted}</span>
        </Space>  
      </Space>
    </Card>
  );
};

export default TaskStatusChart;