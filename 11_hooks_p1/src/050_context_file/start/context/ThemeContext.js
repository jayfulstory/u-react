import { useState, createContext, useContext } from 'react';

export const MyContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <MyContext.Provider value={[theme, setTheme]}>
      {children}
    </MyContext.Provider>
  );
};

export const useTheme = () => useContext(MyContext);
