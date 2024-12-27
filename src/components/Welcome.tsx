"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NameAnimation from "./NameAnimation";

export default function Welcome() {
    const router = useRouter();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setIsAnimating(true);
                setTimeout(() => {
                    router.push("/home");
                }, 800);
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [router]);

    return (
        <section className={`flex-grow flex flex-col items-center justify-center py-12 px-8 md:py-24 ${isAnimating ? "fade-out-move-up" : ""}`}>
            <NameAnimation />
            <p className="text-lg md:text-xl mb-12 text-center max-w-2xl leading-relaxed">
                Passionate Software Developer specializing in building robust and scalable web
                applications. I enjoy tackling challenging problems and crafting elegant solutions.
            </p>
            <div className="relative text-center z-20 text-2xl font-bold animate-bounce mb-8">
                Press Enter to continue {'>>'}
            </div>
        </section>
    );
}

