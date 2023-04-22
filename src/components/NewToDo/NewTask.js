import React, { useRef, useContext } from "react";
import { TaskContext } from "../../App";
import { v4 as uuid } from "uuid";

export default function NewTask() {
  const taskInputRef = useRef();

  const { handleAddTask } = useContext(TaskContext);

  const onAddTask = (e) => {
    e.preventDefault();

    handleAddTask({
      id: uuid(),
      text: taskInputRef.current.value,
    });

    taskInputRef.current.value = "";
  };

  return (
    <form onSubmit={onAddTask}>
      <label htmlFor="add-task">Add a new task</label>
      <input id="add-task" ref={taskInputRef} type="text" />
      <input type="submit" value="Add" />
    </form>
  );
}
