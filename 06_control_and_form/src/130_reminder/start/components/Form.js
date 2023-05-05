import { useState } from 'react';

const Form = ({ addTodo }) => {
  const [val, setVal] = useState('');
  const add = e => {
    e.preventDefault();
    addTodo(val);
    setVal('');
  };
  return (
    <>
      <form onSubmit={add}>
        <input type='text' value={val} onChange={e => setVal(e.target.value)} />
        <button>追加</button>
      </form>
    </>
  );
};

export default Form;
