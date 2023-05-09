import Todo from './components/Todo';
import { ChakraProvider } from '@chakra-ui/react';

const Example = () => {
  return (
    <>
      <ChakraProvider>
        <h2>Reminder</h2>
        <Todo />
      </ChakraProvider>
    </>
  );
};

export default Example;
