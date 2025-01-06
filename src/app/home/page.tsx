// app/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Fractal from "@/components/Fractal";

export const metadata: Metadata = {
    title: "Ryan Liu - Developer Portfolio",
    description: "A showcase of Ryan Liu's development projects and skills.",
};

const SkillCard = ({ title, skills }: { title: string; skills: string }) => (
    <div className="bg-zinc-900 opacity-75 p-6 rounded-lg text-center">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p>{skills}</p>
    </div>
);

export default function Home() {
    return (
        <main className="text-red min-h-screen flex flex-col fade-in">
            {/* Hero Section */}
            <section className="flex-grow flex flex-col items-center justify-center py-20 px-8 h-screen md:py-32">
            {/*<h1 className="text-8xl bg-gradient-to-r from-red-900 to-red via-white bg-clip-text text-transparent">Hey</h1>*/}
            
            <Fractal />
            <div className="w-[60%] bg-slate-900 opacity-75 text-center items-center justify-center">
            <p className="text-lg md:text-xl mb-12 text-center w-full pt-12 px-6 leading-relaxed text-gray-100 z-10">
                Passionate Software Developer specializing in building
                robust and scalable web applications. I enjoy tackling
                challenging problems and crafting elegant solutions.
            </p>
            <div className="flex space-x-6 md:space-x-8 w-full z-10 py-12">
                <Link
                    href="/resume.pdf"
                    className="border border-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300"
                >
                    View Resume
                </Link>
                <Link
                    href="/contact"
                    className="border border-red-600 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300"
                >
                    Contact Me
                </Link>
            </div>
            </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 px-8">
                <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">
                    Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    <SkillCard
                        title="Frontend"
                        skills="React, Next.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS"
                    />
                    <SkillCard
                        title="Backend"
                        skills="Node.js, Express, Python, PostgreSQL, MongoDB, REST APIs"
                    />
                    <SkillCard
                        title="Tools & Technologies"
                        skills="Git, Docker, AWS, Azure, CI/CD, Agile, Linux"
                    />
                </div>
            </section>

            <Footer />

        </main>
    );
}
