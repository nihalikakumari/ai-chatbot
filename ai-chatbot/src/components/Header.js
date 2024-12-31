import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

function Header() {
  // State to manage the theme toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to load the saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    } else {
      setIsDarkMode(false);
      document.body.classList.add('light-theme');
    }
  }, []);

  // Function to handle theme toggle
  const toggleTheme = (e) => {
    const isChecked = e.target.checked;
    setIsDarkMode(isChecked);

    // Update the body class and localStorage based on the toggle
    if (isChecked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="Header">
      <img src={logo} alt="BioSeed Logo" className="Logo" />
      <h1 className="Title">AI Chatbot for BioSeed</h1>
      <div className="ThemeToggle">
        <input 
          type="checkbox" 
          id="theme-toggle" 
          checked={isDarkMode} 
          onChange={toggleTheme} 
        />
        <label htmlFor="theme-toggle" className="ToggleLabel">
          🌞 / 🌙
        </label>
      </div>
    </header>
  );
}

export default Header;
