import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                red: {
                    DEFAULT: "rgb(240, 18, 28)",
                    ...require("tailwindcss/colors").red,
                },
                background: "var(--background)",
                foreground: "var(--foreground)",
            },

            animation: {
                "fade-out-move-up": "fadeOutMoveUp 0.8s ease-in-out forwards",
            },
            keyframes: {
                fadeOutMoveUp: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(-20px)" },
                },
            },

            fontFamily: {
                "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
                "geist-mono": ["var(--font-geist-mono)", "monospace"],
                "fira-code": ["var(--font-fira-code)", "monospace"], // Add FiraCode here
            },
        },
    },
    plugins: [],
};

export default config;
