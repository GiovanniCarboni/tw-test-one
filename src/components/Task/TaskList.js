import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../../store/TaskContext";

export default function TaskList() {
  const { taskState: tasks } = useContext(TaskContext);
  return tasks.map((task) => <Task key={task.id} {...task} />);
}
