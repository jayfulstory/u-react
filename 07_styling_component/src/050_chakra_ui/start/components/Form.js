import { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const toast = useToast();

  const addTodo = e => {
    e.preventDefault();

    if (!enteredTodo) {
      toast({
        title: '新しいタスクを入力してください',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo('');
  };
  return (
    <form onSubmit={addTodo}>
      <HStack>
        <Input
          type='text'
          value={enteredTodo}
          onChange={e => setEnteredTodo(e.target.value)}
          size='ld'
          p={3}
          variant='flushed'
          placeholder='新しいタスク'
          _placeholder={{ opacity: '0.3', color: 'gray.500' }}
          bgColor='white'
        />
        <Button
          type='submit'
          colorScheme='blue'
          variant='outline'
          bgColor='white'
          px={7}
          size='md'
        >
          追加
        </Button>
      </HStack>
    </form>
  );
};

export default Form;
