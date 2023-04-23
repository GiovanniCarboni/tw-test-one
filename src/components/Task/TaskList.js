import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../../store/TaskContext";

import classes from "./TaskList.module.css";

export default function TaskList() {
  const { taskState: tasks } = useContext(TaskContext);
  return (
    <ul className={classes["task-list"]}>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
}
