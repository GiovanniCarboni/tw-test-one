import React, { useRef, useContext } from "react";
import { v4 as uuid } from "uuid";
import Popup from "../UI/Popup";

import classes from "./NewTask.module.css";

import { TaskContext } from "../../store/TaskContext";
import PopupContext from "../../store/PopupContext";

export default function NewTask() {
  const taskInputRef = useRef();

  const { handleAddTask } = useContext(TaskContext);
  const { isDisplayed, displayMessage } = useContext(PopupContext);

  const onAddTask = (e) => {
    e.preventDefault();
    const input = taskInputRef.current;

    if (input.value.trim().length < 1) {
      displayMessage("This task name is not valid");
      return;
    }

    handleAddTask({
      id: uuid(),
      text: input.value,
      checked: false,
    });

    console.log("ciao");
    displayMessage("Task added successfully");

    input.value = "";
  };

  return (
    <form className={classes.form} onSubmit={onAddTask}>
      {isDisplayed && <Popup />}
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
