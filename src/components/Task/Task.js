import React, { useState, useContext } from "react";
import { TaskContext } from "../../store/TaskContext";
import PopupContext from "../../store/PopupContext";

import classes from "./Task.module.css";
import { ReactComponent as TrashIco } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIco } from "../../assets/icons/edit.svg";
import { ReactComponent as CheckmarkIco } from "../../assets/icons/checkmark.svg";

export default function Task({ text, id, checked }) {
  const [isEditing, setIsEditing] = useState(false);
  const [labelValue, setLabelValue] = useState(text);

  const { displayMessage } = useContext(PopupContext);
  const { handleEditTask, handleRemoveTask, handleCheckTask } =
    useContext(TaskContext);

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleEdit = ({ target }) => {
    setLabelValue(target.value);
  };

  const handleSaveEdit = () => {
    if (labelValue.trim().length < 1) {
      displayMessage("Cannot set empty task");
      return;
    }
    setIsEditing(false);
    handleEditTask(id, labelValue);
    displayMessage("Task saved");
  };

  const handleCheck = () => {
    handleCheckTask(id, !checked);
  };

  const handleRemove = () => {
    handleRemoveTask(id);
    displayMessage("Task removed");
  };

  return (
    <li className={classes.task}>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheck} />
      {isEditing && (
        <>
          <input
            autoFocus
            type="text"
            value={labelValue}
            onChange={handleEdit}
            onBlur={handleSaveEdit}
          />
          <button className={classes.action} onClick={handleSaveEdit}>
            <CheckmarkIco />
          </button>
        </>
      )}
      {!isEditing && (
        <>
          <label className={checked ? classes.crossed : ""} htmlFor={id}>
            {labelValue}
          </label>
          <button className={classes.action} onClick={handleStartEdit}>
            <EditIco />
          </button>
        </>
      )}
      <button className={classes.remove} onClick={handleRemove}>
        <TrashIco />
      </button>
    </li>
  );
}
