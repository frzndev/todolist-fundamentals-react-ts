import { useState } from "react";
import { Trash } from "phosphor-react";

import { TaskProps } from "../../App";

import styles from "./Task.module.css";

interface TaskContentProps {
  task: TaskProps;
  onDeleteTask: (taskToDelete: string) => void;
  onChangeTaskStatus: (taskToChange: TaskProps) => void;
}

export function Task({
  task,
  onDeleteTask,
  onChangeTaskStatus,
}: TaskContentProps) {
  const [checked, setChecked] = useState(false);

  const handleChangeTaskStatus = () => {
    setChecked(!checked);
    onChangeTaskStatus(task);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <div className={styles.task}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChangeTaskStatus}
        />
      </label>
      <p className={task.completed ? styles.taskCompleted : styles.taskName}>
        {task.title}
      </p>
      <button title="Delete Task">
        <Trash size={24} onClick={handleDeleteTask} />
      </button>
    </div>
  );
}
