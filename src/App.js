import React, { useReducer, useEffect } from "react";
import NewTask from "./components/NewToDo/NewTask";
import TaskList from "./components/Task/TaskList";

function App() {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
  }, [taskState]);

  const handleAddTask = (task) => {
    setTimeout(() => {
      dispatchTaskAction({ type: "ADD_TASK", task });
    }, 600);
  };

  const handleRemoveTask = (id) => {
    dispatchTaskAction({ type: "REMOVE_TASK", id });
  };

  return (
    <>
      <NewTask onAddTask={handleAddTask} />
      <TaskList tasks={taskState} onRemoveTask={handleRemoveTask} />
    </>
  );
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    default:
      return defaultTasks;
  }
};

const defaultTasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

export default App;
