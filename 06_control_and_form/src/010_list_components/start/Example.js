const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  // const animalList = [];
  // animalList.push(
  //   animals.map(animal => {
  //     return <li>Hello, {animal}</li>;
  //   })
  // );
  const helloAnimals = animals.map((animal, i) => (
    <li key={i}>Hello, {animal}</li>
  ));
  return (
    <>
      <h3>配列の操作</h3>
      {/* <ul>{animalList}</ul> */}
      <ul>{helloAnimals}</ul>
    </>
  );
};

export default Example;
