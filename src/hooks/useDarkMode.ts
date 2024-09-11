import { useState, useEffect } from "react";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    // Function to turn on dark mode
    const turnOnDarkMode = () => {
        setDarkMode(true);
    };

    // Function to turn off dark mode
    const turnOffDarkMode = () => {
        setDarkMode(false);
    };

    // Effect to add or remove the "dark" class on the root element
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return {
        darkMode,
        toggleDarkMode,
        turnOnDarkMode,
        turnOffDarkMode,
    };
}
