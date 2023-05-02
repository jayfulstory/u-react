import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <input
        type='text'
        onChange={e => {
          setValue(e.target.value);
        }}
      />
      ={value}
    </>
  );
};

export default Example;
