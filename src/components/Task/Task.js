import React, { useState } from "react";

export default function Task({ text, id, onRemoveTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [labelValue, setLabelValue] = useState(text);

  const handleEdit = ({ target }) => {
    setLabelValue(target.value);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onEditTask(id, labelValue);
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
      <button onClick={() => onRemoveTask(id)}>Remove</button>
    </div>
  );
}
