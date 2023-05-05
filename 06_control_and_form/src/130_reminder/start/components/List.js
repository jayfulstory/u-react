const List = ({ toDos, deleteTodo }) => {
  const complete = id => {
    deleteTodo(id);
  };
  return (
    <>
      {toDos.map(toDo => (
        <div key={toDo.id}>
          <button onClick={() => complete(toDo.id)}>完了</button>
          {toDo.content}
        </div>
      ))}
    </>
  );
};

export default List;
