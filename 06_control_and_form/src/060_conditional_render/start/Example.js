import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat', null];

  const [filterVal, setFilterVal] = useState('');
  return (
    <>
      <input
        type='text'
        value={filterVal}
        onChange={e => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter(animal => {
            const animalStr = animal ?? '';
            const isMatch = animalStr.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map(animal => {
            return (
              <li key={animal}>
                {/* 三項演算子 */}
                {/* {animal}
                {animal === 'Dog' ? '★' : null} */}
                {animal ?? 'nullまたは、undefined'} {animal === 'Dog' && '★'}
                {/* {animal} {animal === 'Dog' && '★'} */}
              </li>
            );

            // if (animal === 'Dog') {
            //   return <li key={animal}>{animal}★</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }
          })}
      </ul>
    </>
  );
};

export default Example;
