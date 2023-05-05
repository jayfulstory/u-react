import { useState } from 'react';

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const check = () => {
    setIsChecked(prev => !prev);
  };
  return (
    <>
      <label>
        チェック:
        <input type='checkbox' checked={isChecked} onChange={check} />
      </label>
      <div>{isChecked ? 'ON!' : 'OFF!'}</div>
    </>
  );
};

export default Example;
