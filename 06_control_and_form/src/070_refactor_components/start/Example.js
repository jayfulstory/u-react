import { useState } from 'react';
import AnimalList from './components/AnimalList.js';
import AnimalFilter from './components/AnimalFilter.js';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];
  const [filterVal, setFilterVal] = useState('');

  const filteredAnimals = animals.filter(animal => {
    const isMatch =
      animal.toLowerCase().indexOf(filterVal.toLowerCase()) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filteredAnimals} filterVal={filterVal} />
    </>
  );
};

export default Example;
