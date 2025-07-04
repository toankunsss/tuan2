import React from 'react';
import TaskItem from './TaskItem';
import styles from './CompletedTask.module.scss';

const CompletedTask = ({ tasks }) => {
  return (
    <div className={styles.completedTask}>
      <h3 className={styles.title}>Completed Tasks</h3>
      <div className={styles.list}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedTask;
