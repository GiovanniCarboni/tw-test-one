import React, { useRef, useContext } from "react";
import { TaskContext } from "../../store/TaskContext";
import { v4 as uuid } from "uuid";

import classes from "./NewTask.module.css";

export default function NewTask() {
  const taskInputRef = useRef();
  const { handleAddTask } = useContext(TaskContext);

  const onAddTask = (e) => {
    e.preventDefault();

    handleAddTask({
      id: uuid(),
      text: taskInputRef.current.value,
      checked: false,
    });

    taskInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={onAddTask}>
      <label htmlFor="add-task">Add a new task</label>
      <input
        id="add-task"
        placeholder="Type your task here..."
        ref={taskInputRef}
        type="text"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
