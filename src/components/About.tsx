"use client";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function About() {
    const { sectionRef, opacity } = useScrollOpacity();

    return (
        <section className="w-full flex items-center justify-center py-6 fade-in-move-up">
            {/* Floating Div with Rounded Corners */}
            <div
                ref={sectionRef} // Apply ref to the inner div for scroll tracking
                className="w-2/3 p-8 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 ease-in-out"
                style={{ opacity }} // Opacity applied to the inner div
            >
                { /* <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-4">About Me</h2> */ }
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3">
                        <img
                            src="/images/profile.jpg" // Replace with your profile image path
                            alt="Profile Image"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Description Section */}
                    <div className="w-full md:w-2/3">
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                            I'm Ryan Liu, a Computer Science and Mathematics student at Northwestern University.
                        </p>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                            I specialize in developing efficient algorithms, working on full-stack applications, and exploring cutting-edge technologies.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            I’m always driven to push boundaries and build things that make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
