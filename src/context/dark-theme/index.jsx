import { createContext, useContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils";
import { localStorageVariable } from "../../constants";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    setLocalStorage(localStorageVariable.darkTheme, !isDarkMode);
  };

  useEffect(() => {
    const isDarkMode = getLocalStorage(localStorageVariable.darkTheme) || false;
    setIsDarkMode(isDarkMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export const useTheme = () => useContext(ThemeContext);
