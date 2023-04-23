import React, { useState, useContext } from "react";
import { TaskContext } from "../../store/TaskContext";

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
    <div>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheck} />
      {isEditing && (
        <>
          <input type="text" value={labelValue} onChange={handleEdit} />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      )}
      {!isEditing && (
        <>
          <label htmlFor={id}>{labelValue}</label>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => handleRemoveTask(id)}>Remove</button>
    </div>
  );
}
