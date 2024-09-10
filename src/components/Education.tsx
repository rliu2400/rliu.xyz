"use client";
import { useEffect, useRef, useState } from "react";

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleScroll = () => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.min(rect.bottom, windowHeight);
        const visibleBottom = Math.max(rect.top, 0);
        const visibleHeight = visibleTop - visibleBottom;

        // Ensure that opacity increases as more of the section becomes visible
        let opacityValue = visibleHeight / rect.height;

        if (opacityValue > 1) {
            opacityValue = 1;
        }

        setOpacity(opacityValue);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check when the component mounts

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="max-w-4xl flex items-center justify-center py-24"
            style={{ opacity }} // Added smooth transition here
        >
            <div className="w-full h-full bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 ease-in-out">
                <h2 className="text-4xl font-semibold text-center mb-8">Education</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 dark:text-gray-200">
                    {/* Education Card 1 */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">B.S. Computer Science & Mathematics</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Minor in Philosophy</p>
                        <p className="text-md mt-auto text-gray-800 dark:text-gray-100">2023 - Present</p>
                    </div>

                    {/* Education Card 2 */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">M.S. Computer Science</p>
                        <p className="text-md mt-auto text-gray-800 dark:text-gray-100">2023 - Present</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
