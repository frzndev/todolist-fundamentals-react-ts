import { TaskProps } from "../../App";
import Clipboard from "../../assets/Clipboard.svg";
import { Task, Counter } from "../index";

import styles from "./ToDoList.module.css";

interface ToDoListProps {
  tasks: Array<TaskProps>;
  onDeleteTask: (taskToDelete: string) => void;
  onChangeTaskStatus: (taskToChange: TaskProps) => void;
}

export function ToDoList({
  tasks,
  onDeleteTask,
  onChangeTaskStatus,
}: ToDoListProps) {
  const numberOfCompletedTasks = tasks.filter(
    (item) => item.completed === true
  ).length;

  return (
    <main className={styles.toDoList}>
      <header className={styles.header}>
        <strong className={styles.createdTasks}>
          Created Tasks
          <Counter counterType="created" count={tasks.length} />
        </strong>
        <strong className={styles.doneTasks}>
          Completed{" "}
          <Counter
            counterType="finished"
            count={numberOfCompletedTasks}
            maxCount={tasks?.length}
          />
        </strong>
      </header>
      {tasks.length > 0 ? (
        <>
          <div className={styles.taskList}>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onChangeTaskStatus={onChangeTaskStatus}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className={styles.emptyTasks}>
          <img src={Clipboard} alt="ClipBoard-Empty-Tasks" />
          <strong>You dont have a tasks for doing now...</strong>
          <p>Create new tasks and organize your life</p>
        </div>
      )}
    </main>
  );
}
