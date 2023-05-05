import { useState } from 'react';

const Example = () => {
  const inputFact = () => ({
    key: Math.floor(Math.random() * 1e3),
    value: <input style={{ width: '100px' }} />,
  });
  const [inputs, setInputs] = useState([inputFact(), inputFact()]);

  const unshiftInput = () => {
    setInputs(prev => [inputFact(), ...prev]);
  };
  const flex = {
    display: 'flex',
    justifyContent: 'space-around',
  };
  return (
    <>
      <button onClick={unshiftInput}>戦闘に追加</button>
      <div style={flex}>
        <div>
          <strong>uniq key</strong>
          {inputs.map(input => (
            <li key={input.key} style={{ listStyle: 'none' }}>
              {input.key}: {input.value}
            </li>
          ))}
        </div>
        <div>
          <strong>index</strong>
          {inputs.map((input, i) => (
            <li key={i} style={{ listStyle: 'none' }}>
              {input.key}: {input.value}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Example;
