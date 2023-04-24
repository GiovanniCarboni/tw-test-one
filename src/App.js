import React from "react";
import NewTask from "./components/NewTask/NewTask";
import Actions from "./components/Actions/Actions";
import TaskList from "./components/Task/TaskList";

import { TaskContextProvider } from "./store/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <h1>Task list</h1>
      <NewTask />
      <Actions />
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
