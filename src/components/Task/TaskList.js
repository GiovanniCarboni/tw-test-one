import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, onRemoveTask }) {
  return tasks.map((task) => (
    <Task key={task.id} {...task} onRemoveTask={onRemoveTask} />
  ));
}