import { v4 as uuidv4 } from "uuid";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { TaskProps } from "../../App";
import { PlusCircle } from "phosphor-react";

import styles from "./NewTaskBar.module.css";

interface NewTaskBarProps {
  addTask: (addTask: TaskProps) => void;
}

export function NewTaskBar({ addTask }: NewTaskBarProps) {
  const [task, setTask] = useState("");

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTask(inputValue);

    if (inputValue.trim() === "" && inputValue !== "") {
      event.target.setCustomValidity("This field can't have only blanks.");
    } else {
      event.target.setCustomValidity("");
    }
  };

  const handleNewTaskInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("This field is required!");
  };

  const handleAddTask = (event: FormEvent) => {
    const generateUniqueId = uuidv4();

    event.preventDefault();
    addTask({ id: generateUniqueId, title: task, completed: false });

    setTask("");
  };

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.newTaskBar}>
        <input
          type="text"
          value={task}
          placeholder="New task.."
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </form>
  );
}
