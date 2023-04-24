import React, { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

import classes from "./Actions.module.css";

export default function Actions() {
  const {
    handleRemoveAllTasks,
    handleCheckAllTasks,
    handleUncheckAllTasks,
    taskState,
  } = useContext(TaskContext);

  return (
    <div className={classes.actions}>
      <button
        onClick={handleUncheckAllTasks}
        disabled={!taskState.some((task) => task.checked)}
      >
        Uncheck all
      </button>
      <button
        onClick={handleCheckAllTasks}
        disabled={!taskState.some((task) => !task.checked)}
      >
        Check all
      </button>
      <button
        className="danger"
        onClick={handleRemoveAllTasks}
        disabled={taskState.length < 1}
      >
        Remove all
      </button>
    </div>
  );
}
