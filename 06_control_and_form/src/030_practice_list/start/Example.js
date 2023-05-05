import Profile from './components/Profile';

const Example = () => {
  const profile = [
    { name: 'Geo', age: 18, hobbies: ['sports', 'music'] },
    { name: 'Tom', age: 25, hobbies: ['movie', 'music'] },
    { name: 'Lisa', age: 21, hobbies: ['sports', 'travel', 'game'] },
  ];
  return (
    <>
      <ul>
        <Profile profiles={profile} />
      </ul>
    </>
  );
};

export default Example;
