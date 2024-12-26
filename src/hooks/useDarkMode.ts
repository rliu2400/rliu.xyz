import { useState, useEffect } from "react";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const turnOnDarkMode = () => {
        setDarkMode(true);
    };

    const turnOffDarkMode = () => {
        setDarkMode(false);
    };

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
