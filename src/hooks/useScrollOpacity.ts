import { useEffect, useRef, useState } from "react";

export const useScrollOpacity = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleTop = Math.min(rect.bottom, windowHeight);
        const visibleBottom = Math.max(rect.top, 0);
        const visibleHeight = visibleTop - visibleBottom;

        let opacityValue = visibleHeight / rect.height;
        if (opacityValue > 1) {
            opacityValue = 1;
        }

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

