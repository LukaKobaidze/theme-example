import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

export default function ToggleTheme(props) {
  const { onThemeToggle } = useContext(ThemeContext);

  return <button onClick={onThemeToggle}>Toggle Theme</button>;
}
