import { useState } from 'react';

const Example = () => {
  const [fruit, setFruit] = useState('');
  const onChange = e => setFruit(e.target.value);

  const RADIO_FRUITS = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
      {RADIO_FRUITS.map(val => (
        <label key={val}>
          <input
            type='radio'
            value={val}
            checked={fruit === val}
            onChange={onChange}
          />
          {val}
        </label>
      ))}
      {/* <label id='apple'>
        <input
          id='apple'
          type='radio'
          value='Apple'
          checked={fruit === 'Apple'}
          onChange={onChange}
        />
        Apple
      </label>
      <label htmlFor='banana'>
        <input
          id='banana'
          type='radio'
          value='Banana'
          checked={fruit === 'Banana'}
          onChange={onChange}
        />
        Banana
      </label>
      <label htmlFor='cherry'>
        <input
          id='cherry'
          type='radio'
          value='Cherry'
          checked={fruit === 'Cherry'}
          onChange={onChange}
        />
        Cherry
      </label> */}
      {fruit !== '' ? <h3>私は{fruit}が食べたい</h3> : null}
    </>
  );
};

export default Example;
