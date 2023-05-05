const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal, i) => {
    return <li key={i}>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {animals.map((animal, i) => (
          <li key={i}>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
