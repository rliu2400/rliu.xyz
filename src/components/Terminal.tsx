"use client";
import { useState, useRef, useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";

export default function Terminal() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [currentDir, setCurrentDir] = useState("~"); // Emulate starting directory
    const terminalHistoryRef = useRef<HTMLDivElement>(null); // Reference to the terminal history div

    // Dark Mode hook
    const { darkMode, toggleDarkMode, turnOnDarkMode, turnOffDarkMode } = useDarkMode();

    // Commands supported by the terminal
    const commands = {
        pwd: () => "Users/visitor" + currentDir.slice(1),
        ls: () => "blog  projects  about  contact",
        cd: (dir: string) => {
            if (dir === "about" || dir === "projects" || dir === "blog" || dir === "contact") {
                setCurrentDir(`~/${dir}`);
                return `Navigated to ~/${dir}`;
            } else {
                return "Directory not found";
            }
        },
        clear: () => {
            setHistory([]);
            return "";
        },
        help: () => "Available commands: ls, cd <dir>, pwd, clear, help, darkmode",

        // Dark mode commands
        "darkmode toggle": () => {
            toggleDarkMode();
            return `Dark mode toggled. Current mode: ${darkMode ? "off" : "on"}`;
        },
        "darkmode on": () => {
            turnOnDarkMode();
            return "Dark mode turned on";
        },
        "darkmode off": () => {
            turnOffDarkMode();
            return "Dark mode turned off";
        }
    };

    const handleCommand = (cmd: string) => {
        const args = cmd.trim().split(/\s+/);
        const command = args.slice(0, 2).join(" "); // Combine the first two words as the command
        const restArgs = args.slice(2); // The rest are considered as additional arguments

        if (commands[command]) {
            return commands[command](...restArgs);
        } else {
            return `${command}: command not found`;
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const output = handleCommand(input);
        setHistory([...history, `${getPrompt()} ${input}`, output]);
        setInput("");
    };

    const getPrompt = () => {
        return `user@headinmyhands:${currentDir} $`; // Customizable prompt with username, directory, and symbol
    };

    // Scroll the terminal history div to the bottom whenever the history changes
    useEffect(() => {
        if (terminalHistoryRef.current) {
            terminalHistoryRef.current.scrollTop = terminalHistoryRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <section className="w-full h-[calc(100vh/3)] flex items-center justify-center fade-in">
            <div className="max-w-4xl w-full p-4 bg-black text-green-600 terminal">
                <div
                    ref={terminalHistoryRef}
                    className="terminal-history overflow-y-auto h-64 mb-4 max-h-96"
                >
                    {history.map((entry, index) => (
                        <div key={index}>{entry}</div>
                    ))}
                </div>
                <form onSubmit={onSubmit}>
                    <span className="text-blue-500">{getPrompt()}</span> {/* The prompt displayed before the input */}
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white w-3/4"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                    />
                </form>
            </div>
        </section>
    );
}
