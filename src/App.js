import { useState } from 'react';
import './App.css';
import { Form } from './component/Form/Form';
import { Modal } from './component/Modal/Modal';
import { Header } from './component/TodoList/Header';
import { TodoList } from './component/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false)
  const [index, setIndex] = useState(undefined);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  const ClickModal = (i) => {
    setModal(true)
    setIndex(i)
  }
  return (
    <div className='App'>
      <Form onSubmit={handleAddTodo} />
      <Header />
      <TodoList todos={todos} onClick={ClickModal} />
      {modal && <Modal setModal={setModal} todos={todos} activeIndex={index} />}
    </div>
  );
}

export default App;
