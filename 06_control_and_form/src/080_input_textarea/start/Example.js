import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState('');
  const clear = () => {
    setVal('');
  };
  return (
    <>
      <label htmlFor='456'>ラベル</label>
      <div>
        <input
          id='123'
          type='text'
          placeholder='こんにちは'
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <textarea
          id='456'
          type='text'
          placeholder='こんにちは'
          value={val}
          onChange={e => setVal(e.target.value)}
        />
      </div>
      <button onClick={clear}>クリア</button>
    </>
  );
};

export default Example;
