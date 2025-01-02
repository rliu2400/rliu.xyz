"use client";
import { useEffect, useState } from "react";

export default function NameAnimation() {
    const text = "HI. I'M RYAN";
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150);
    const [isStarted, setIsStarted] = useState(false);
    const [showCursor, setShowCursor] = useState(true); // State to control cursor blinking

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

    useEffect(() => {
        const cursorBlinkInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 700); // Blink every 500ms

        return () => clearInterval(cursorBlinkInterval);
    }, []);

    return (
        <section className="h-1/3 font-fira-code z-0 py-24 fade-in">
            {/* Main Text */}
            <div className="text-9xl font-semibold text-left relative text-white" style={{ transform: "scaleY(1.5)" }}>
                <span className="text-shadow-glow">{displayedText}</span>
                <span
                    className="text-shadow-glow"
                    style={{
                        opacity: showCursor ? 1 : 0, // Control opacity
                        display: "inline-block", // Needed for transform to apply correctly
                        transform: "scaleY(1.3) translateY(6px)", // Scale the block vertically by 1.5
                        transformOrigin: "bottom",
                    }}
                >
                    ∎
                </span>

                {/* Reflected Text (stretched, with gradient opacity) */}
                <div className="reflected-text-container absolute top-full left-0 w-full mt-4 text-shadow-glowSoft">
                    <span className="reflected-text">
                        {displayedText}
                    </span>
                </div>
            </div>
        </section>
    );
}

