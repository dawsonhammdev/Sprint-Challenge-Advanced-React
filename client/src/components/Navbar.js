import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(); 
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
     
      <div className="dark-mode__toggle">
        <button className={darkMode ? 'toggle toggled' : 'toggle'} onClick={toggleMode}>
            Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;