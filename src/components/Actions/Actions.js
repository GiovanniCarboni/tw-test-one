import React, { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

export default function Actions() {
  const { handleRemoveAllTasks, handleCheckAllTasks, handleUncheckAllTasks } =
    useContext(TaskContext);

  return (
    <div>
      <button onClick={handleUncheckAllTasks}>Uncheck all</button>
      <button onClick={handleCheckAllTasks}>Check all</button>
      <button onClick={handleRemoveAllTasks}>Remove all</button>
    </div>
  );
}
