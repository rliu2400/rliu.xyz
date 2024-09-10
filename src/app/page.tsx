import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center bg-fixed bg-cover bg-center text-gray-800 dark:text-gray-100 font-fira-code"
            style={{ backgroundImage: 'url("/images/hacker_cat_red.jpg")' }} // Apply background image
        >
            {/* Header */}
            <Header />

            {/* About Section */}
            <About />

            {/* Education Section */}
            <Education />

            {/* Resume Section */}
            <Resume />

            {/* Projects Section */}
            <Projects />

            {/* Footer Section */}
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
        </div>
    );
}
