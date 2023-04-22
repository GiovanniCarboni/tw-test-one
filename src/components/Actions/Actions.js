import React, { useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

export default function Actions() {
  const { handleRemoveAllTasks } = useContext(TaskContext);

  return (
    <div>
      <button onClick={handleRemoveAllTasks}>Remove all</button>
    </div>
  );
}
