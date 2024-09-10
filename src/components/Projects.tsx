export default function Projects() {
    return (
        <section className="w-full flex items-center justify-center py-24">
            <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 ease-in-out fade-in-move-up">
                <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-colors duration-500 ease-in-out">
                    {/* Project 1 */}
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Project 1</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Project description here</p>
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
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Project 2</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Project description here</p>
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
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Project 3</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">Project description here</p>
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
            </div>
        </section>
    );
}