import React, { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

export default function Actions() {
  const {
    handleRemoveAllTasks,
    handleCheckAllTasks,
    handleUncheckAllTasks,
    taskState,
  } = useContext(TaskContext);

  return (
    <div>
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
      <button onClick={handleRemoveAllTasks}>Remove all</button>
    </div>
  );
}
