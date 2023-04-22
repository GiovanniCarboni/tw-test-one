import React, { useRef } from "react";
import { v4 as uuid } from "uuid";

export default function NewTask({ onAddTask }) {
  const taskInputRef = useRef();

  const handleAddTask = (e) => {
    e.preventDefault();

    onAddTask({
      id: uuid(),
      text: taskInputRef.current.value,
    });

    taskInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTask}>
      <label htmlFor="add-task">Add a new task</label>
      <input id="add-task" ref={taskInputRef} type="text" />
      <input type="submit" value="Add" />
    </form>
  );
}
