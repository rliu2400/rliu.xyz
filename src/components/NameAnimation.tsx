"use client";
import { useEffect, useState } from "react";

export default function TitleAnimation() {
    const text = "HI. I'M RYAN";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startDelay = setTimeout(() => {
            setIsStarted(true);
        }, 1000);

        return () => clearTimeout(startDelay);
    }, []);

    useEffect(() => {
        if (!isStarted) return;

        const handleTyping = () => {
            if (isDeleting) {
                // Deleting characters
                setDisplayedText((prev) => prev.slice(0, -1));
                setSpeed(75);
            } else {
                // Typing characters
                setDisplayedText((prev) => text.slice(0, prev.length + 1));
                setSpeed(125);
            }

            if (!isDeleting && displayedText === text) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause before starting to delete
            }

            // If all characters are deleted, start typing again
            if (isDeleting && displayedText === "") {
                setIsDeleting(false);
            }
        };

        const timeout = setTimeout(handleTyping, speed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, speed, isStarted]);

    return (
        <section className="h-1/3 font-fira-code z-0 py-24 fade-in">
            {/* Main Text */}
            <div className="text-9xl text-left font-bold relative text-white text-shadow-glow" style={{ transform: "scaleY(1.5)" }}>
                <span>{displayedText}</span>
                <span className="blinking-cursor"></span>

                {/* Reflected Text (stretched, with gradient opacity) */}
                <div className="reflected-text-container absolute top-full left-0 w-full mt-4">
                    <span className="reflected-text">
                        {displayedText}
                    </span>
                </div>
            </div>
        </section>
    );
}

