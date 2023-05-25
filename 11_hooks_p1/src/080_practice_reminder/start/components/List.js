import Item from './Item';

const List = ({ todos, deleteTodo, updateTodo }) => {
  const complete = id => {
    deleteTodo(id);
  };
  return (
    <div>
      {todos.map(todo => (
        <Item
          key={todo.id}
          todo={todo}
          complete={complete}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default List;
