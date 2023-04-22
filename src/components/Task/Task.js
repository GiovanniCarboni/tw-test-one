import React from "react";

export default function Task({ text, id, onRemoveTask }) {
  return (
    <div>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onRemoveTask(id)}>Remove</button>
    </div>
  );
}
