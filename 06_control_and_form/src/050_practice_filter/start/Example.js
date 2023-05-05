import { useState } from 'react';
import Profile from './components/Profile';

const persons = [
  {
    name: 'Geo',
    age: 18,
    hobbies: ['sports', 'music'],
  },
  {
    name: 'Tom',
    age: 25,
    hobbies: ['movie', 'music'],
  },
  {
    name: 'Lisa',
    age: 21,
    hobbies: ['sports', 'travel', 'game'],
  },
];
const Example = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <input
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {persons
          .filter(
            person =>
              person.name.includes(search) ||
              person.age.toString().includes(search) ||
              person.hobbies.some(hobby => hobby.includes(search))
          )
          .map(person => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
