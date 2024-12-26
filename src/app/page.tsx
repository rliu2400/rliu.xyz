// app/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';
import NameAnimation from '../components/NameAnimation'

export const metadata: Metadata = {
  title: 'Ryan Liu - Developer Portfolio',
  description: 'A showcase of Ryan Liu\'s development projects and skills.',
};

const SkillCard = ({ title, skills }: { title: string; skills: string }) => (
  <div className="bg-black p-6 rounded-lg text-center">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p>{skills}</p>
  </div>
);

export default function Home() {
  return (
    <main className="bg-black text-red-500 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center py-20 px-8 md:py-32"> {/* Added more padding on larger screens */}
        <NameAnimation />
        <p className="text-lg md:text-xl mb-12 text-center max-w-2xl leading-relaxed"> {/* Added max-width and leading */}
          Passionate Software Developer specializing in building robust and scalable web applications. I enjoy tackling challenging problems and crafting elegant solutions.
        </p>
        <div className="flex space-x-6 md:space-x-8"> {/* Increased spacing */}
          <Link href="/projects" className="bg-red-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-300"> {/* Added font-medium and transition duration */}
            View Projects
          </Link>
          <Link href="/contact" className="border border-red-500 px-8 py-3 rounded-lg font-medium hover:bg-red-500 hover:text-black transition duration-300"> {/* Added font-medium and transition duration */}
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-900 py-16 px-8"> {/* Increased padding */}
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Skills</h2> {/* Increased font size and added tracking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto"> {/* Added max-width and mx-auto for centering */}
          <SkillCard title="Frontend" skills="React, Next.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS" /> {/* Added Tailwind CSS */}
          <SkillCard title="Backend" skills="Node.js, Express, Python, PostgreSQL, MongoDB, REST APIs" /> {/* Added REST APIs */}
          <SkillCard title="Tools & Technologies" skills="Git, Docker, AWS, Azure, CI/CD, Agile, Linux" /> {/* Improved category and added more tools */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400"> {/* Improved styling */}
        <p>&copy; {new Date().getFullYear()} Ryan Liu. All rights reserved.</p>
      </footer>
    </main>
  );
}
