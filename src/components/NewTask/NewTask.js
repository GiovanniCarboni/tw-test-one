import React, { useRef, useContext, useState } from "react";
import ReactDOM from "react-dom";

import { v4 as uuid } from "uuid";
import Popup from "../UI/Popup";

import classes from "./NewTask.module.css";

import { TaskContext } from "../../store/TaskContext";
import PopupContext from "../../store/PopupContext";
import Spinner from "../UI/Spinner";

export default function NewTask() {
  const taskInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const { handleAddTask } = useContext(TaskContext);
  const { isDisplayed, displayMessage } = useContext(PopupContext);

  const onAddTask = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
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
    }, 1000);
  };

  return (
    <form className={classes.form} onSubmit={onAddTask}>
      {/* {isLoading && <Spinner />} */}
      {isLoading &&
        ReactDOM.createPortal(<Spinner />, document.querySelector("#popup"))}
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
