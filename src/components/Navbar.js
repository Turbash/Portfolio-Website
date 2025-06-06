import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
  return "light"; 
});
  const [menuOpen, setMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    setSpin(true);
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    setTimeout(() => setSpin(false), 500);
  };

  const handleMenuToggle = () => {
    if (menuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className="navbar fixed w-full right-0 top-0 transition-colors duration-500 ease-in-out px-6 md:px-12 lg:px-20 py-2 z-10">
      <div className="mt-2 relative flex justify-between z-50 bg-white dark:bg-slate-900 text-fg dark:text-fg-dark items-center lg:max-w-[80%] mx-auto border border-border dark:border-border-dark rounded-full px-4 xs:px-8 py-4 shadow-lg shadow-black/70 dark:shadow-white/10">
        <a href="./">
          <span className="text-xl sm:text-2xl font-bold hover:text-indigo-600 dark:hover:text-indigo-400">
            Turbash Negi
          </span>
        </a>

        <div className="flex nav-links-container gap-4 lg:gap-6 xl:gap-10 items-center">
          <ul className="nav-links hidden md:flex gap-4 lg:gap-6 xl:gap-10">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                <li className="font-semibold text-md lg:text-lg hover:text-primary dark:hover:text-primary-dark cursor-pointer transition-colors duration-300 ">
                  {link}
                </li>
              </a>
            ))}
          </ul>

          <button onClick={toggleTheme} className="toggle-theme-btn">
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className={`text-2xl ${
                theme === "dark" ? "text-yellow-300" : "text-blue-800"
              }  ${spin ? "animate-spin-once" : ""}`}
            />
          </button>

          <button
            onClick={handleMenuToggle}
            className="block md:hidden z-[60]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className={`text-2xl cursor-pointer ${
                menuOpen ? "text-white" : "text-fg"
              } dark:text-fg-dark lm:hover:text-indigo-600 lm:dark:hover:text-indigo-400 transition-colors duration-300 ${
                menuOpen ? "animate-spin-once" : ""
              }`}
            />
          </button>

          {(menuOpen || isClosing) && (
            <div
              className={`mobile-view fixed inset-0 bg-slate-900/90 md:hidden text-white backdrop-blur-sm bg-opacity-70 flex flex-col items-center justify-center z-50 text-3xl space-y-8 ${
                isClosing ? "animate-slide-out" : "animate-slide-in"
              }`}
            >
              <ul className="flex flex-col gap-10">
                {links.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`}>
                    <li
                      onClick={() => handleMenuToggle()}
                      className="cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-semibold"
                    >
                      {link}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
