import Child from './components/Child';
import { createContext } from 'react';
export const MyContext = createContext('hello useContext');

// useContext
const Example = () => {
  return <Child />;
};

export default Example;
