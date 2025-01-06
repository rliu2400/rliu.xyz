import { Metadata } from "next";
import Welcome from "../components/Welcome";

export const metadata: Metadata = {
    title: "Ryan Liu - Developer Portfolio",
};

export default function Home() {
    return (
        <main className="text-red min-h-screen flex flex-col">
            <Welcome />
        </main>
    );
}

