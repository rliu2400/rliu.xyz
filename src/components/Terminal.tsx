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
        darkmode: (arg?: string) => {
            switch (arg) {
                case "on":
                    turnOnDarkMode();
                    return "Dark mode turned on";
                case "off":
                    turnOffDarkMode();
                    return "Dark mode turned off";
                case "toggle":
                    toggleDarkMode();
                    return `Dark mode toggled. Current mode: ${darkMode ? "off" : "on"}`;
                default:
                    return "Usage: darkmode [on|off|toggle]";
            }
        }
    };

    const handleCommand = (cmd: string) => {
        const [command, ...args] = cmd.split(" ");

        if (command in commands) {
            // Pass the first argument (if available) to the command
            return (commands[command as keyof typeof commands] as Function)(...args);
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
        return `user@headinmyhands: ${currentDir} $`; // Customizable prompt with username, directory, and symbol
    };

    // Scroll the terminal history div to the bottom whenever the history changes
    useEffect(() => {
        if (terminalHistoryRef.current) {
            terminalHistoryRef.current.scrollTop = terminalHistoryRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <section className="min-w-1xl w-1/3 h-1/6 absolute bottom-72 left-12">
            <div className="bg-black terminal">
                <div
                    ref={terminalHistoryRef}
                    className="terminal-history overflow-y-auto mb-4 h-48 max-h-96"
                >
                    {history.map((entry, index) => (
                        <div key={index}>{entry}</div>
                    ))}
                </div>
                <form onSubmit={onSubmit} className="flex w-full">
                    <span className="text-blue-500">{getPrompt()}&nbsp;</span> {/* The prompt displayed before the input */}
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoFocus
                    />
                </form>
            </div>
        </section>
    );
}

