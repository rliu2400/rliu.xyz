"use client";
import React, { useRef } from 'react';

type Achievement = {
  years: string;
  name: string;
  description: string;
};

const AchievementsCarousel: React.FC = () => {
  const achievements: Achievement[] = [
    {
      years: '2024',
      name: 'ICPC Mid-Central Regional Competition Silver Medalist',
      description: '',
    },
    {
      years: '2024',
      name: 'ICPC 2025 NAC Qualifier',
      description: 'Beat 74 teams to place in the top 4 schools in the Mid-Central Regional International Collegiate Programming Contest, advancing to the North America Championships. Member of team MREEOWWW (I picked the name)',
    },
    {
      years: '2021, 2023, 2024',
      name: 'Meta Hacker Cup Round 2 Qualifier',
      description: 'Not my best performance',
    },
    {
      years: '2022, 2023',
      name: 'American Invitational Mathematics Exam Qualifier',
      description: 'Placed in the top ~800 of ~300,000 American Math Competition contestants/~8000 AIME contestants.',
    },
    {
      years: '2022',
      name: 'USA Computing Olympiad Gold Division',
      description: 'Apr 2022',
    },
    {
      years: '2022',
      name: "President's Volunteer Service Award",
      description: 'Jan 2022',
    },
    {
      years: '2019',
      name: 'CS:GO HSEL Fall Major Semifinalist',
      description: '2019 (3rd-4th/167 teams), when I played video games.',
    },
    {
      years: '',
      name: 'American Fine Arts Festival Concert at Carnegie Hall Winner',
      description: "Winner's recital solo performance at Carnegie Hall.",
    },
    {
      years: '',
      name: 'First Place - American Protégé International Piano and Strings Competition',
      description: "Winner's recital solo performance at Carnegie Hall.",
    },
    {
      years: '',
      name: 'First Place - Grand Prize Virtuoso International Music Competition',
      description: "Winner's recital solo performance at the Parco Della Musica in Rome, Italy.",
    },
    {
      years: '',
      name: 'First Place - Music Festival in Honor of Confucius',
      description: '',
    },
    {
      years: '',
      name: 'Silver - Quebec International Music Competition',
      description: '',
    },
    {
      years: '',
      name: 'Third Place - ENKOR International Competition',
      description: '',
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  const startScroll = (direction: 'up' | 'down') => {
    const step = direction === 'up' ? -.000001 : .000001; // Adjust step for smoothness
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ top: step, behavior: 'auto' });
        scrollAnimationRef.current = requestAnimationFrame(scroll);
      }
    };
    scrollAnimationRef.current = requestAnimationFrame(scroll);
  };

  const stopScroll = () => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  };

  return (
    <div className="carousel-container max-w-2md min-w-md mx-auto h-96 overflow-hidden relative border border-gray-300 rounded-lg">
      <div
        className="scroll-area absolute top-0 left-0 right-0 h-1/3 hover:cursor-pointer"
        onMouseEnter={() => startScroll('up')}
        onMouseLeave={stopScroll}
      />
      <div
        className="scroll-area absolute bottom-0 left-0 right-0 h-1/3 hover:cursor-pointer"
        onMouseEnter={() => startScroll('down')}
        onMouseLeave={stopScroll}
      />
      <div
        ref={scrollRef}
        className="carousel-content h-full overflow-y-scroll snap-y snap-mandatory"
      >
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="achievement-item text-center p-4 snap-center bg-black"
          >
            <h3 className="font-bold text-white">{achievement.name}</h3>
            <p className="text-sm text-gray-400">{achievement.years}</p>
            <p className="text-sm text-gray-200">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;

