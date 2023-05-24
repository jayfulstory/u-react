import Select from './components/Select';
import Input from './components/Input';
import Result from './components/Result';
import { CalcProvider } from './context/Context';

const Example = () => {
  return (
    <CalcProvider>
      <Input name='a' />
      <Input name='b' />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
