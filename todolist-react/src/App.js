import React, { useState, useRef } from 'react';
import CreateList from './CreateList';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    todoText: '',
  });
  const { todoText } = inputs;
  const change = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      todoText: 'Buy milk',
    },
    {
      id: 2,
      todoText: 'some eggs',
    },
    {
      id: 3,
      todoText: 'Go to work',
    },
    {
      id: 4,
      todoText: 'reactjsexample.com',
    }
  ]);

  const nextId = useRef(5);

  const addList = () => {
    const todo = {
      id: nextId.current,
      todoText,
    }
    setTodos(todos.concat(todo));
    setInputs({
      todoText: ''
    });
    nextId.current += 1;
  }

  const removeList = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <CreateList todoText={todoText} change={change} addList={addList} />
      <TodoList todos={todos} removeList={removeList} />
    </>
  );
}

export default App;
