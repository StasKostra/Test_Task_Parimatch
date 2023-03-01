import React, { useState } from "react";
import "../../App.css";

export const TodoItem = ({ todoitem, todoId, onClick }) => {
  const [status, setStatus] = useState(false);

  return (
    <div className="item">
      <div className="item_text" onClick={() => onClick(todoId)}>
        <p>{todoId}.</p>
        <p>{todoitem.input.description}</p>
        <p>{todoitem.input.title}</p>
      </div>
      <input
        type="checkbox"
        checked={status}
        onChange={() => setStatus(!status)}
      />
    </div>
  );
};
