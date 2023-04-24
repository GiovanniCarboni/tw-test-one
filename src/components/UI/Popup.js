import React, { useContext } from "react";
import ReactDOM from "react-dom";

import classes from "./Popup.module.css";

import PopupContext from "../../store/PopupContext";

export default function Popup() {
  const { message, onClose } = useContext(PopupContext);

  return ReactDOM.createPortal(
    <div className={classes.popup}>
      <p>{message}</p>
      <div onClick={onClose}>&times;</div>
    </div>,
    document.querySelector("#popup")
  );
}
