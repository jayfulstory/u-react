import { useContext } from 'react';
import { MyContext } from '../Example';

const Header = () => {
  const THEMES = ['light', 'dark', 'red'];
  const [theme, setTheme] = useContext(MyContext);

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
