import React from "react";
import '../../App.css'

export const Modal = ({setModal ,todos, activeIndex}) => {
    const itemModal=todos[activeIndex-1].input

    
  return (
    <div className="modal" >
        <h1>{itemModal.title}</h1>
        <h2>Description:</h2>
        <p>{itemModal.description}</p>
    <button onClick={()=>setModal()}>Close</button>
    </div>
  );
};
