import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center bg-fixed bg-cover bg-center text-gray-800 dark:text-gray-100 font-fira-code"
            style={{ backgroundImage: 'url("/images/hacker_cat_red.jpg")' }} // Apply background image
        >
            {/* Header */}
            <Header />

            {/* About */}
            <About />

            {/* Education Section */}
            <section className="w-full py-12 px-6 bg-white">
                <h2 className="text-4xl font-semibold text-center mb-8">Education</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 dark:text-gray-200">
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">B.S. Computer Science & Mathematics</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Minor in Philosophy</p>
                        <p className="text-md mt-auto">2023 - Present</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">M.S. Computer Science</p>
                        <p className="text-md mt-auto">2023 - Present</p>
                    </div>
                </div>
            </section>
            {/* Resume Section */}
            <section className="w-full py-12 bg-gray-50 px-6">
                <h2 className="text-4xl font-semibold text-center mb-8">Resume</h2>
                <div className="flex flex-col items-center">
                    <a
                        href="/resume.pdf" // Make sure to link to your actual resume file
                        className="bg-red-900 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition"
                        download
                    >
                        Download My Resume
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section className="w-full py-12 px-6 bg-white">
                <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">Project 1</h3>
                        <p className="mt-2 text-gray-600">
                            feeeeeet (placeholder)
                        </p>
                        <a
                            href="https://github.com/yourusername/project1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:underline mt-4 inline-block"
                        >
                            View on GitHub
                        </a>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">Project 2</h3>
                        <p className="mt-2 text-gray-600">
                            feeeeeet (placeholder)
                        </p>
                        <a
                            href="https://github.com/yourusername/project2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:underline mt-4 inline-block"
                        >
                            View on GitHub
                        </a>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold">Project 3</h3>
                        <p className="mt-2 text-gray-600">
                            feeeeeet (placeholder)
                        </p>
                        <a
                            href="https://github.com/yourusername/project3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 hover:underline mt-4 inline-block"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="w-full bg-red-900 text-white py-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                    <div className="flex gap-6 mt-4">
                        {/* Add social media icons or links */}
                        <a
                            href="https://linkedin.com/in/rliu2400"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/rliu2400"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

