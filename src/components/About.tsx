export default function About() {
    return (
        <section className="w-full py-12 px-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                
                {/* Image Section */}
                <div className="w-full md:w-1/3">
                    <img
                        src="/images/asdasd.jpg"
                        alt="Profile Picture"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Description Section */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg mb-4">
                        Hi, I'm Ryan Liu, a Computer Science and Mathematics student at Northwestern University with a passion for building impactful software solutions. Blah Blah Blah.
                    </p>
                    <p className="text-lg mb-4">
                        I specialize in developing efficient algorithms, working on full-stack applications, and exploring cutting-edge technologies. In my free time, I enjoy competitive programming, badminton, and risk-taking.
                    </p>
                    <p className="text-lg">
                        Whether it's creating a simple website or designing complex systems or interacting with people, I’m always driven to push boundaries (haha) (hahahaha) and build things that make a difference.
                    </p>
                </div>
            </div>
        </section>
    );
}

