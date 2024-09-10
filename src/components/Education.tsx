"use client";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function Education() {

    const { sectionRef, opacity } = useScrollOpacity();

    return (
        <section
            ref={sectionRef}
            className="max-w-4xl flex items-center justify-center py-24"
            style={{ opacity }} // Added smooth transition here
        >
            <div className="w-full h-full bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 fade-in-move-up ease-in-out">
                <h2 className="text-4xl font-semibold text-center mb-8">Education</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 dark:text-gray-200">
                    {/* Education Card 1 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out w-full md:w-1/3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">B.S. Computer Science & Mathematics</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Minor in Philosophy</p>
                        <p className="text-md mt-auto text-gray-800 dark:text-gray-100">2023 - Present</p>
                    </div>

                    {/* Education Card 2 */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out w-full md:w-1/3">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">M.S. Computer Science</p>
                        <p className="text-md mt-auto text-gray-800 dark:text-gray-100">2023 - Present</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
