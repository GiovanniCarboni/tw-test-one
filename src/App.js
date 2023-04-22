import React from "react";
import NewTask from "./components/NewTask/NewTask";
import Actions from "./components/Actions/Actions";
import TaskList from "./components/Task/TaskList";

import { TaskContextProvider } from "./store/TaskContext";

function App() {
  return (
    <TaskContextProvider>
      <NewTask />
      <Actions />
      <TaskList />
    </TaskContextProvider>
  );
}

export default App;
