import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggleButton