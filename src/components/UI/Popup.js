import React, { useContext } from "react";

import classes from "./Popup.module.css";

import PopupContext from "../../store/PopupContext";

export default function Popup() {
  const { message, onClose } = useContext(PopupContext);

  return (
    <div className={classes.popup}>
      <p>{message}</p>
      <div onClick={onClose}>&times;</div>
    </div>
  );
}
