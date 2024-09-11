"use client";

import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-red-900 text-white flex justify-between items-center px-6 py-4 shadow-md z-50 transition-all duration-500 ease-in-out">
            {/* Left: Dropdown Menu */}
            <div className="relative">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl focus:outline-none"
                >
                    {menuOpen ? '↓' : '☰'}
                </button>
                <div
                    className={`absolute top-full left-0 bg-white dark:bg-gray-700 text-gray-800 dark:text-white mt-2 rounded-md shadow-lg z-50 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <ul className="flex flex-col">
                        <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                            <a href="#about">About</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Center: Greeting */}
            <div className="text-4xl transition-all duration-500 ease-in-out">
                {"<| <<== Hi, I'm Ryan Liu ==>> |>"}
            </div>

            {/* Right: Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-2xl focus:outline-none transition-all duration-500 ease-in-out">
                {darkMode ? '🌙' : '☀️'}
            </button>
        </header>
    );
}
