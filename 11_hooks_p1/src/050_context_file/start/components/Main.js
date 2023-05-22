import { useContext } from 'react';
import { MyContext } from '../Example.js';

const Main = () => {
  const [theme, _] = useContext(MyContext);
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
