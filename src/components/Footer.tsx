export default function Footer() {
    return (
        <footer className="w-full bg-red-900 text-white py-8 transition-colors duration-500 ease-in-out">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                <div className="flex gap-6 mt-4">
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
    );
}
