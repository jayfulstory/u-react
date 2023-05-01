const Hello = props => {
  // POINT propsは読み取り専用
  // props.name = 'Bob';
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
