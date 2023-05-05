import { useState } from 'react';
const Example = () => {
  const OPTIONS = ['Apple', 'Banana', 'Cherry'];
  const [selected, setSelected] = useState('Banana');

  return (
    <>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {OPTIONS.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div>選択された果物: {selected}</div>
    </>
  );
};

export default Example;
