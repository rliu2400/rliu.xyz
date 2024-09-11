import { useEffect, useRef, useState } from "react";

export const useScrollOpacity = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Distance A: Distance from the bottom of the div to the top of the viewport
        const distanceA = rect.bottom;

        // Distance B: Distance from the top of the div to the bottom of the viewport
        const distanceB = windowHeight - rect.top;

        // If distance A is less, use it to calculate opacity; otherwise, use distance B
        let distance = Math.min(distanceA, distanceB);

        // Normalize the distance and calculate opacity
        let opacityValue = 5 / 2 * distance / windowHeight;

        // Ensure opacity is capped at 1
        if (opacityValue > 1) {
            opacityValue = 1;
        }

        // Set the opacity based on the smaller distance
        setOpacity(opacityValue);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run the logic when the component mounts

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { sectionRef, opacity };
};
