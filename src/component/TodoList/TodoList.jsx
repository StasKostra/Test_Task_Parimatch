import React from "react";
import { TodoItem } from "./TodoItem";
import '../../App.css'

export const TodoList = ({ todos , setModal, onClick} ) => {
  return (
    <div className="List">
      {todos.length === 0
        ? "Empty"
        : todos.map((todo, index) => {
            return <TodoItem key={index} todoitem={todo} todoId={index + 1} setModal={setModal} onClick={onClick} />;
          })}
    </div>
  );
};
