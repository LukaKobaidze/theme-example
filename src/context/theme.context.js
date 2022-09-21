import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  onThemeToggle: () => {},
});

export function ThemeContextProvider(props) {
  const [theme, setTheme] = useState('light');

  const handleThemeToggle = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // runs whenever `theme` changes
    const prevTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(`body--${prevTheme}`);
    document.body.classList.add(`body--${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, onThemeToggle: handleThemeToggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
