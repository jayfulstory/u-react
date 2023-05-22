import { useState, createContext } from 'react';

export const MyContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <MyContext.Provider value={[theme, setTheme]}>
      {children}
    </MyContext.Provider>
  );
};

export default ThemeProvider;
