"use client";
import { useScrollOpacity } from "@/hooks/useScrollOpacity";

export default function About() {

    const { sectionRef, opacity } = useScrollOpacity();

    return (
        <section
            ref = {sectionRef}
            className="w-full min-h-screen flex items-center justify-center py-24"
            style = {{ opacity }}
        >
            {/* Floating Div with Rounded Corners */}
            <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 fade-in-move-up ease-in-out">
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
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                            I'm Ryan Liu, a Computer Science and Mathematics student at Northwestern University.
                        </p>
                        <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                            I specialize in developing efficient algorithms, working on full-stack applications, and exploring cutting-edge technologies. In my free time, I enjoy competitive programming, playing badminton, and taking risks.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Whether it's designing complex systems or interacting with people, I’m always driven to push boundaries (ha) (haha) and build things that make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
