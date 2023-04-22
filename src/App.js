import React, { useReducer, useEffect } from "react";
import NewTask from "./components/NewToDo/NewTask";
import TaskList from "./components/Task/TaskList";

export const TaskContext = React.createContext();

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

  const handleEditTask = (id, text) => {
    dispatchTaskAction({ type: "EDIT_TASK", id, text });
  };

  const taskContextValue = {
    handleAddTask,
    handleRemoveTask,
    handleEditTask,
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      <NewTask />
      <TaskList tasks={taskState} />
    </TaskContext.Provider>
  );
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [action.task, ...state];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
    case "EDIT_TASK":
      const index = state.findIndex((task) => task.id === action.id);
      const tasksCopy = [...state];
      tasksCopy[index] = { ...state[index], text: action.text };
      return tasksCopy;
    default:
      return defaultTasks;
  }
};

const defaultTasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

export default App;
