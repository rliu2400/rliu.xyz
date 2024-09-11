"use client";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function Resume() {

    const { sectionRef, opacity } = useScrollOpacity();

    return (
        <section
            ref={sectionRef}
            className="w-full flex items-center justify-center py-24"
            style={{ opacity }} // Added smooth transition here
            >
            {/* Floating Div with Rounded Corners */}
            <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 ease-in-out fade-in-move-up">
                <h2 className="text-4xl font-semibold text-center mb-8">Resume</h2>
                <div className="flex flex-col items-center">
                    <a
                        href="/resume.pdf"
                        className="bg-red-900 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
                        download
                    >
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
}