import { Metadata } from "next";
import Welcome from "../components/Welcome";

export const metadata: Metadata = {
    title: "Ryan Liu - Developer Portfolio",
    description: "A showcase of Ryan Liu's development projects and skills.",
};

export default function Home() {
    return (
        <main className="text-red min-h-screen flex flex-col">
            {/* Hero Section */}
            <Welcome /> {/* Moved client logic to a separate client component */}
        </main>
    );
}

