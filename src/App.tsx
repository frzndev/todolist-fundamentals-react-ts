import { useState } from "react";

import { Header, NewTaskBar, ToDoList } from "./components";

import "./global.css";
import styles from "./App.module.css";

export interface TaskProps {
  id: string;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const addTask = (newTask: TaskProps) => {
    setTasks([...tasks, newTask]);
  };

  const changeTaskStatus = (taskToChange: TaskProps) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskToChange.id) {
        return { id: task.id, title: task.title, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (taskToDelete: string) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <>
      <Header />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NewTaskBar addTask={addTask} />
          <ToDoList
            tasks={tasks}
            onDeleteTask={deleteTask}
            onChangeTaskStatus={changeTaskStatus}
          />
        </div>
      </div>
    </>
  );
}

export default App;
