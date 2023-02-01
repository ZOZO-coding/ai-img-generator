import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Footer } from "./components";
import { Home, CreatePost } from "./pages";

const App = () => {
  const [theme, setTheme] = useState("light");

  // check if the system preference is dark or light and load the page with the corresponding mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  // check for the theme variable and load the page with corresponding theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <Router>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <div className="flex justify-center">
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
          <button
            type="button"
            className="font-inter font-medium bg-gray-300 text-black mx-2 px-4 py-2 rounded-md"
            onClick={handleThemeSwitch}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
          </button>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full dark:bg-[#121212] bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;
