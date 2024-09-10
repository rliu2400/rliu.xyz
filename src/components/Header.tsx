// src/components/Header.tsx

"use client";

import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode by toggling the state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
        }
    };

    return (
        <header className="w-full bg-red-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
            {/* Left: Dropdown Menu */}
            <div className="relative">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-2xl focus:outline-none"
                >
                    {menuOpen ? '↓' : '☰'}
                </button>
                {menuOpen && (
                    <div className="absolute top-full left-0 bg-white dark:bg-gray-700 text-gray-800 dark:text-white mt-2 rounded-md shadow-lg">
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
                )}
            </div>

            {/* Center: Greeting */}
            <div className="text-2xl font-bold">
                Hi, I'm Ryan Liu
            </div>

            {/* Right: Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className="text-2xl focus:outline-none">
                {darkMode ? '🌙' : '☀️'}
            </button>
        </header>
    );
}

