export default function Education() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center py-24">
            {/* Floating Div with Rounded Corners */}
            <div className="max-w-4xl bg-white dark:bg-gray-800 p-8 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg transition-colors duration-500 ease-in-out">
                <h2 className="text-4xl font-semibold text-center mb-8">Education</h2>
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 dark:text-gray-200">
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">B.S. Computer Science & Mathematics</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Minor in Philosophy</p>
                        <p className="text-md mt-auto">2023 - Present</p>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md max-w-md flex-grow flex flex-col transition-colors duration-500 ease-in-out">
                        <h3 className="text-2xl font-bold">Northwestern University</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">M.S. Computer Science</p>
                        <p className="text-md mt-auto">2023 - Present</p>
                    </div>
                </div>
            </div>
        </section>
    );
}