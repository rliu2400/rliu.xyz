import React from "react";
import AchievementsCarousel from "@/components/AchievementsCarousel";

const AboutPage = () => {
    return (
        <div className="about-page-container max-w-4xl mx-auto p-6 fade-in">
            <section className="introduction mb-8">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg leading-relaxed">
                    Hi, I’m Ryan, a Computer Science and Mathematics student at
                    Northwestern University. I have a deep passion for solving
                    complex problems through technology, with a focus on
                    full-stack development and machine learning.
                </p>
            </section>

            <section className="academic-background mb-8">
                <h2 className="text-3xl font-semibold mb-3">
                    Academic Background
                </h2>
                <p className="text-lg leading-relaxed pb-12">
                    I’m pursuing a Bachelor’s degree in Computer Science and
                    Mathematics at Northwestern University (2023-2026). Here's a
                    list of my achievements below.
                </p>
                <AchievementsCarousel />
            </section>

            <section className="professional-journey mb-8">
                <h2 className="text-3xl font-semibold mb-3">
                    Professional Journey
                </h2>
                <p className="text-lg leading-relaxed">
                    I am currently working at Juxta Technologies,
                    a health-tech startup where I lead the development of
                    advanced analytics. Additionally, I have contributed
                    to cutting-edge research at the Northwestern AI and Security
                    Lab and worked on high-speed data transfer systems at the
                    International Center for Advanced Internet Research.
                </p>
            </section>

            <section className="skills-expertise mb-8">
                <h2 className="text-3xl font-semibold mb-3">
                    Skills and Expertise
                </h2>
                <p className="text-lg leading-relaxed">
                    My technical expertise includes programming in Python,
                    JavaScript, C++, and TypeScript, as well as working with
                    frameworks and tools like React, TensorFlow, Docker, and
                    TailwindCSS. I excel in building efficient systems,
                    optimizing workflows, and crafting scalable solutions.
                </p>
            </section>

            <section className="personal-interests mb-8">
                <h2 className="text-3xl font-semibold mb-3">
                    Personal Interests
                </h2>
                <p className="text-lg leading-relaxed">
                    Outside of work, I’m a badminton player and competitive programmer.
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
