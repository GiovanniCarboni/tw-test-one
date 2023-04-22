import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  return tasks.map((task) => <Task key={task.id} {...task} />);
}
