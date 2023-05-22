import './Example.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import ThemeProvider from './context/ThemeContext';

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default Example;
