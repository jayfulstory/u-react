// POINT Contextコードの整理方法

import './Example.css';
import Main from './components/Main.js';
import Header from './components/Header.js';
import { ThemeProvider } from './context/ThemeContext.js';

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default Example;
