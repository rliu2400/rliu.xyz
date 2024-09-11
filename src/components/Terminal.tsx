"use client";
import { useState } from "react";

export default function TerminalSection() {
    const [input, setInput] = useState("");
    const [history, setHistory] = useState<string[]>([]);
    const [currentDir, setCurrentDir] = useState("~"); // Emulate starting directory

    // Commands supported by the terminal
    const commands = {
        pwd: () => currentDir,
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
        help: () => "Available commands: ls, cd <dir>, pwd, clear, help",
    };

    const handleCommand = (cmd: string) => {
        const [command, ...args] = cmd.split(" ");
        if (commands[command]) {
            return commands[command](...args);
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

    return (
        <section className="w-full flex items-center justify-center py-24 fade-in">
            <div className="max-w-4xl w-full p-4 bg-black text-green-500 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center text-white mb-4">Terminal</h2>
                <div className="terminal-history overflow-y-auto h-64 mb-4">
                    {history.map((entry, index) => (
                        <div key={index}>{entry}</div>
                    ))}
                </div>
                <form onSubmit={onSubmit}>
                    <span className="text-blue-500">{getPrompt()}</span> {/* The prompt displayed before the input */}
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
