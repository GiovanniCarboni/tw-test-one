import React, { useState, useContext } from "react";
import { TaskContext } from "../../App";

export default function Task({ text, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [labelValue, setLabelValue] = useState(text);

  const { handleEditTask, handleRemoveTask } = useContext(TaskContext);

  const handleEdit = ({ target }) => {
    setLabelValue(target.value);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    handleEditTask(id, labelValue);
  };

  return (
    <div>
      <input id={id} type="checkbox" />
      {isEditing && (
        <>
          <input type="text" value={labelValue} onChange={handleEdit} />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      )}
      {!isEditing && <label htmlFor={id}>{labelValue}</label>}
      {!isEditing && <button onClick={() => setIsEditing(true)}>Edit</button>}
      <button onClick={() => handleRemoveTask(id)}>Remove</button>
    </div>
  );
}
