import { useTheme } from '../context/ThemeContext.js';

const Header = () => {
  const [theme, setTheme] = useTheme();

  const THEMES = ['light', 'dark', 'red'];

  const changeTheme = e => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map(val => {
        return (
          <label key={val}>
            <input
              type='radio'
              value={val}
              onChange={changeTheme}
              checked={theme === val}
            />
            {val}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
