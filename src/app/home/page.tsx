// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-black text-red-500 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center py-16 px-8">
      {/*<div className="relative w-48 h-48 rounded-full overflow-hidden mb-8">
            <Image 
                src="/profile.jpg" // Replace with your profile image
                alt="Profile Picture"
                fill
                style={{ objectFit: "cover" }}
                sizes="480px"
                priority
            />
        </div>*/}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ryan Liu</h1>
        <p className="text-lg md:text-xl mb-8 text-center">
          Passionate Software Developer | Specializing in Web Technologies
        </p>
        <div className="flex space-x-4">
          <Link href="/projects" className="bg-red-500 text-black px-6 py-3 rounded-lg hover:bg-red-600 transition">
            View Projects
          </Link>
          <Link href="/contact" className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-black transition">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section (Optional) */}
      <section className="bg-gray-900 py-12 px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p>React, Next.js, HTML, CSS, JavaScript, TypeScript</p>
          </div>
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Backend</h3>
            <p>Node.js, Express, Python, Databases (e.g., PostgreSQL, MongoDB)</p>
          </div>
          <div className="bg-black p-6 rounded-lg text-center">
            <h3 className="font-semibold mb-2">Other</h3>
            <p>Git, Docker, Cloud Platforms (e.g., AWS, Azure), Agile</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
