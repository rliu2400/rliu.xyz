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
            {/* Header */}
            <Header />

            <TitleAnimation />

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
    );
}
