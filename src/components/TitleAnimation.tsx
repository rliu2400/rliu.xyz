"use client";
import { useEffect, useState } from "react";

export default function TypingAnimation() {
    const text = "HI, I'M RYAN"; // The text to be typed
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(150); // Typing speed
    const [isStarted, setIsStarted] = useState(false); // Track when typing starts

    useEffect(() => {
        // Initial delay before typing starts
        const startDelay = setTimeout(() => {
            setIsStarted(true);
        }, 500); // 500ms delay before typing starts

        return () => clearTimeout(startDelay);
    }, []);

    useEffect(() => {
        if (!isStarted) return; // Prevent typing before the delay

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting characters
                setDisplayedText((prev) => prev.slice(0, -1));
                setSpeed(75); // Speed up deletion
            } else {
                // Typing characters
                setDisplayedText((prev) => text.slice(0, prev.length + 1));
                setSpeed(125); // Normal typing speed
            }

            // If typing is complete and we're not deleting
            if (!isDeleting && displayedText === text) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause before starting to delete
            }

            // If all characters are deleted, start typing again
            if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setIndex(0);
            }
        };

        // Set a timeout for typing or deleting characters
        const timeout = setTimeout(handleTyping, speed);

        // Cleanup the timeout
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, speed, isStarted]);

    return (
        <section className="h-1/3 terminal-text">
            <div className="text-2xl pt-12 text-center fade-in">
                <p>Welcome to my page.</p>
            </div>
            <div className="text-8xl text-center">
                {displayedText}
                <span className="blinking-cursor"></span>
            </div>
        </section>
    );
}

