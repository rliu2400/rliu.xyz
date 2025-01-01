// app/components/Header.tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <header
            className={cn(
                "bg-gray-900 py-4 px-8 w-full sticky top-0 z-50 transition-colors duration-300 fade-in",
                className,
            )}
        >
            <nav className="container mx-auto flex justify-between items-center">
                <Link
                    href="/home"
                    className="text-xl font-bold text-red-600 hover:text-red-400 transition"
                >
                    {" "}
                    {/* Improved link styling */}
                    Ryan Liu
                </Link>
                <div className="flex space-x-6">
                    <Link
                        href="/about"
                        className="text-gray-300 hover:text-white transition"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/resume.pdf"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Resume
                    </Link>
                    <Link
                        href="/transcript.pdf"
                        className="text-gray-300 hover:text-white transition"
                    >
                        Transcript
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
