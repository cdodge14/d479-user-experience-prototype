// src/context/ThemeContext.jsx
import { createContext, useContext } from 'react';
import { theme } from '../theme.jsx';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
