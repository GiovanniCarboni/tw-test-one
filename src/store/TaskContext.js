import React, { useReducer, useEffect } from "react";

export const TaskContext = React.createContext();
const storage = localStorage.getItem("tasks");

export function TaskContextProvider({ children }) {
  const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskState));
  }, [taskState]);

  const handleAddTask = (task) => {
    dispatchTaskAction({ type: "ADD_TASK", task });
  };

  const handleRemoveTask = (id) => {
    dispatchTaskAction({ type: "REMOVE_TASK", id });
  };

  const handleEditTask = (id, text) => {
    dispatchTaskAction({ type: "EDIT_TASK", id, text });
  };

  const handleRemoveAllTasks = () => {
    dispatchTaskAction({ type: "REMOVE_ALL" });
  };

  const handleCheckTask = (id, checked) => {
    dispatchTaskAction({ type: "CHECK_TASK", id, checked });
  };

  const handleCheckAllTasks = () => {
    dispatchTaskAction({ type: "CHECK_ALL" });
  };

  const handleUncheckAllTasks = () => {
    dispatchTaskAction({ type: "UNCHECK_ALL" });
  };

  const taskContextValue = {
    handleAddTask,
    handleRemoveTask,
    handleEditTask,
    handleRemoveAllTasks,
    handleCheckTask,
    handleCheckAllTasks,
    handleUncheckAllTasks,
    taskState,
  };

  return (
    <TaskContext.Provider value={taskContextValue}>
      {children}
    </TaskContext.Provider>
  );
}

const defaultTasks = storage ? JSON.parse(storage) : [];
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [action.task, ...state];
    }

    case "REMOVE_TASK": {
      return state.filter((task) => task.id !== action.id);
    }

    case "EDIT_TASK": {
      const index = state.findIndex((task) => task.id === action.id);
      const tasksCopy = [...state];
      tasksCopy[index] = { ...state[index], text: action.text };
      return tasksCopy;
    }

    case "CHECK_TASK": {
      const index = state.findIndex((task) => task.id === action.id);
      const tasksCopy = [...state];
      tasksCopy[index] = { ...state[index], checked: action.checked };
      return tasksCopy;
    }

    case "CHECK_ALL": {
      return state.map((task) => ({ ...task, checked: true }));
    }

    case "UNCHECK_ALL": {
      return state.map((task) => ({ ...task, checked: false }));
    }

    case "REMOVE_ALL": {
      return [];
    }

    default:
      return defaultTasks;
  }
};
