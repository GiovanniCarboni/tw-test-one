import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { PopupContextProvider } from "./store/PopupContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PopupContextProvider>
      <App />
    </PopupContextProvider>
  </React.StrictMode>
);
