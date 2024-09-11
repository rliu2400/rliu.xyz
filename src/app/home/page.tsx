import Header from "@/components/Header";
import TitleAnimation from "@/components/TitleAnimation";
import About from "@/components/About";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col items-center bg-fixed bg-cover bg-center text-gray-800 dark:text-gray-100 font-fira-code"
            style={{ backgroundImage: 'url("/images/hacker_cat_red.jpg")' }} // Apply background image
        >
            {/* Vignette */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
            
            <div className="relative z-10 justify-center items-center">
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
                <Footer />
            </div>
        </div>
    );
}
