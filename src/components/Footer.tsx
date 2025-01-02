import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-red-900 text-white py-8 transition-colors duration-500 ease-in-out">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                <div className="flex gap-6 mt-4">
                    {/* LinkedIn Icon */}
                    <a
                        href="https://linkedin.com/in/rliu2400"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/linkedin.svg"
                            alt="LinkedIn"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* GitHub Icon */}
                    <a
                        href="https://github.com/rliu2400"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* Codeforces Icon */}
                    <a
                        href="https://codeforces.com/profile/GreatSageEqualToHeaven"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/codeforces.svg"
                            alt="Codeforces"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* Leetcode Icon */}
                    <a
                        href="https://leetcode.com/u/GreatSageEqualToHeaven/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/leetcode.svg"
                            alt="Leetcode"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/headinmyhands_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/instagram.svg"
                            alt="Instagram"
                            width={30}
                            height={30}
                        />
                    </a>
                    {/* Goodreads Icon */}
                    <a
                        href="https://www.goodreads.com/handsinmyhead"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <Image
                            src="/icons/goodreads.svg"
                            alt="Goodreads"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
