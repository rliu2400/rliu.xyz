"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TitleAnimation from "@/components/TitleAnimation";

export default function Welcome() {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);

    // Add event listener for "Enter" key press
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setIsAnimating(true); // Start the fade-out animation
                setTimeout(() => {
                    router.push("/home"); // Navigate to /home after animation
                }, 800); // Match the duration of the animation (800ms)
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center bg-fixed bg-cover bg-center text-gray-800 dark:text-gray-100 font-fira-code fade-in"
            style={{ backgroundImage: 'url("/images/hacker_cat_red.jpg")' }} // Apply background image
        >
            {/* Vignette */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
            
            {/* Only content should fade out */}
            <div className={`relative z-10 justify-center items-center transition-opacity duration-800 ${isAnimating ? "fade-out-move-up" : ""}`}>
                {/* Title Animation */}
                <TitleAnimation />

                <div className="flex items-center justify-center h-24 py-18">
                    <Image
                        src="/images/selfie.png"
                        width={500}
                        height={200}
                        alt="A selfie image"
                        className="z-10 rounded-lg shadow-lg fade-bottom"
                    />
                </div>

                <div className="relative text-center z-20 text-3xl font-bold animate-bounce" style={{ color: '#ff0000' }}>
                    Press Enter to start {'>>'}
                </div>
            </div>
        </div>
    );
}

