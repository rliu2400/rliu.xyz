import React, { useState, useEffect } from "react";

interface ScrollProgressBarProps {
    targetRef: React.RefObject<HTMLDivElement>;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({ targetRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const target = targetRef.current;
            if (target) {
                const containerTop = target.getBoundingClientRect().top;
                const containerHeight = target.offsetHeight;
                const viewportCenter = window.innerHeight;

                const centerRelativeToDiv = viewportCenter - containerTop;
                const scrollProgress = Math.min(
                    100,
                    Math.max(
                        0,
                        (centerRelativeToDiv / containerHeight) * 150 - 50,
                    ),
                );

                setProgress(scrollProgress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: "0%",
                bottom: "0%",
                width: "5px",
                backgroundColor: "white",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "0%",
                    bottom: "0",
                    width: "100%",
                    height: `${progress}%`,
                    backgroundColor: "#3B82F6",
                    transition: "height 0.1s ease-out",
                }}
            />
        </div>
    );
};

const CircleIndicator: React.FC<{
    position: number;
    progress: number;
}> = ({ position, progress }) => {
    const isActive = progress >= position;
    const radius = isActive ? 24 : 0;

    return (
        <div
            style={{
                position: "absolute",
                top: `${position}%`,
                left: "50%", // Center horizontally relative to the bar
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: isActive ? "#3B82F6" : "white",
                transformOrigin: "center",
                transition:
                    "transform 0.3s ease-out, background-color 0.3s ease-out",
                transform: `translateX(-50%) scale(${isActive ? 1 : 0})`,
            }}
        />
    );
};

const ScrollProgress: React.FC<ScrollProgressBarProps> = ({ targetRef }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const target = targetRef.current;
            if (target) {
                const containerTop = target.getBoundingClientRect().top;
                const containerHeight = target.offsetHeight;
                const viewportCenter = window.innerHeight;

                const centerRelativeToDiv = viewportCenter - containerTop;
                const scrollProgress = Math.min(
                    100,
                    Math.max(
                        0,
                        (centerRelativeToDiv / containerHeight) * 150 - 50,
                    ),
                );

                setProgress(scrollProgress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const circlePositions = [10, 25, 50, 75, 90];

    return (
        <div
            style={{
                position: "absolute",
                top: "5%",
                bottom: "5%",
                width: "5px",
            }}
        >
            <ScrollProgressBar targetRef={targetRef} />
            {circlePositions.map((pos) => (
                <CircleIndicator key={pos} position={pos} progress={progress} />
            ))}
        </div>
    );
};

export default ScrollProgress;

