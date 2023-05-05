import List from './List.js';
import Form from './Form.js';
import { useState } from 'react';

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: '店予約する',
    },
    {
      id: 2,
      content: '卵買う',
    },
    {
      id: 3,
      content: '郵便出す',
    },
  ];

  const [toDos, setToDos] = useState(todosList);

  const deleteTodo = id => {
    const newTodos = toDos.filter(todo => todo.id !== id);
    setToDos(newTodos);
  };

  const addTodo = val => {
    const newTodos = [
      ...toDos,
      { id: Math.floor(Math.random() * 1e5), content: val },
    ];
    console.log(newTodos);
    setToDos(newTodos);
  };
  return (
    <>
      <List toDos={toDos} deleteTodo={deleteTodo} />
      <Form Todo={toDos} addTodo={addTodo} />
    </>
  );
};

export default Todo;
