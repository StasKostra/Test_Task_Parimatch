import React, { useState } from "react";
import "../../App.css";

export const Form = (props) => {
  const [input, setInput] = useState({
    title: "",
    description: "",
  });
  const[errorMes,setErrorMes] = useState(false)

  const InputChange = (e) => {
    const value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
  };

  function handleSubmit(event) {
    if (input.title.length !== 0) {
      event.preventDefault();
      setInput({
        title: "",
        description: "",
      });
      props.onSubmit({ input });
      setErrorMes(false)
    } else {
      setInput({
        title: "",
      });
      setErrorMes(true)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        Title:
        <input
          className={errorMes ? 'invalid-input':undefined}
          value={input.title}
          name="title"
          onChange={InputChange}
          placeholder="Enter title"
        />
      </label>
      <label htmlFor="">
        Description:
        <input
          value={input.description}
          name="description"
          onChange={InputChange}
          placeholder="Enter description"
        />
      </label>
      <input type="button" value="Create" onClick={handleSubmit} />
    </form>
  );
};
