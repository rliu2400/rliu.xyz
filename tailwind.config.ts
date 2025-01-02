import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
                "fade-in-move-up": "fadeInMoveUp 0.8s ease-in-out forwards",
                "fade-in": "fadeIn 0.8s ease-in-out forwards",
                "fade-out": "fadeOut 0.8s ease-in-out forwards",
            },

            keyframes: {
                fadeOutMoveUp: {
                    "0%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(-20px)" },
                },
                fadeInMoveUp: {
                    "100%": { opacity: "1", transform: "translateY(0)" },
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                },
                fadeIn: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                fadeOut: {
                    "100%": { opacity: "1", transform: "translateY(0)" },
                    "0%": { opacity: "0", transform: "translateY(-20px)" },
                },
            },

            textShadow: {
                glow: "0 0 5px red, 0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red",
                glowSoft:
                    "0 0 1px red, 0 0 2px red, 0 0 4px red, 0 0 8px red, 0 0 16px red, 0 0 32px red",
            },

            fontFamily: {
                "geist-sans": ["var(--font-geist-sans)", "sans-serif"],
                "geist-mono": ["var(--font-geist-mono)", "monospace"],
                "fira-code": ["var(--font-fira-code)", "monospace"], // Add FiraCode here
            },
        },
    },
    plugins: [require("tailwindcss-textshadow")],
};

export default config;
