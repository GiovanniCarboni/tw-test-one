import React, { useState, useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

import classes from "./Task.module.css";

export default function Task({ text, id, checked }) {
  const [isEditing, setIsEditing] = useState(false);
  const [labelValue, setLabelValue] = useState(text);

  const { handleEditTask, handleRemoveTask, handleCheckTask } =
    useContext(TaskContext);

  const handleEdit = ({ target }) => {
    setLabelValue(target.value);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    handleEditTask(id, labelValue);
  };

  const handleCheck = () => {
    handleCheckTask(id, !checked);
  };

  return (
    <li className={classes.task}>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheck} />
      {isEditing && (
        <>
          <input type="text" value={labelValue} onChange={handleEdit} />
          <button className={classes.btn} onClick={handleSaveEdit}>
            Save
          </button>
        </>
      )}
      {!isEditing && (
        <>
          <label
            style={{ textDecoration: checked && "line-through" }}
            htmlFor={id}
          >
            {labelValue}
          </label>
          <button className={classes.btn} onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button className="danger" onClick={() => handleRemoveTask(id)}>
        Remove
      </button>
    </li>
  );
}
