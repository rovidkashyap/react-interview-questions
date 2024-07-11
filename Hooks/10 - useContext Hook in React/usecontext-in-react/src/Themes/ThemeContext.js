import React, { createContext, useState } from 'react'

// Create a context with 'light' as the default value
const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;