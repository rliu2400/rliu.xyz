// app/components/Header.tsx
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {

    const pathname = usePathname();
    const showHeader = pathname !== "/";

    return showHeader ? (
        <header
            className={cn(
                "bg-gray-900 py-4 px-8 w-full fixed top-0 z-50 transition-colors duration-300 fade-in",
                className,
            )}
        >
            <nav className="container mx-auto flex justify-between items-center">
                <Link
                    href="/home"
                    className="header-item text-xl font-bold text-red-600 hover:text-black-400 px-8 transition"
                >
                    Ryan
                </Link>
                <div className="flex space-x-6">
                    <Link
                        href="/about"
                        className="header-item headerLink"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="header-item headerLink"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/resume.pdf"
                        className="header-item headerLink"
                    >
                        Resume
                    </Link>
                    <Link
                        href="/transcript.pdf"
                        className="header-item headerLink"
                    >
                        Transcript
                    </Link>
                </div>
            </nav>
        </header>
    ) : null;
};

export default Header;
