import React, { useState, useRef } from 'react';

const AchievementsCarousel: React.FC = () => {
  const achievements: string[] = [
    '2024 ICPC Mid-Central Regional Competition Silver Medalist - Nov 2024',
    'ICPC 2025 NAC Qualifier - Nov 2024: Beat 74 teams to place in the top 4 schools in the Mid-Central Regional Contest of the International Collegiate Programming Contest, advancing to the North America Championships. Member of team MREEOWWW (I picked the name).',
    'Meta Hacker Cup Round 2 Qualifier - 2021, 2023, 2024 - Oct 2024',
    'American Invitational Mathematics Exam Qualifier - 2022, 2023 - Feb 2023: Highest Score: 8. Placed in the top 10% (~800) of AIME contestants. One of ~8,000 out of ~300,000 nationwide American Math Competition participants selected to take the AIME.',
    'USA Computing Olympiad Gold Division - Apr 2022',
    "2022 President's Volunteer Service Award - Jan 2022",
    'CS:GO HSEL Fall Major Semifinalist, 2019 (3rd-4th/167 teams) - Dec 2019',
    "American Fine Arts Festival Concert at Carnegie Hall Winner - Winner's recital solo performance at Carnegie Hall.",
    "First Place - American Protégé International Piano and Strings Competition - Winner's recital solo performance at Carnegie Hall.",
    "First Place - Grand Prize Virtuoso International Music Competition - Winner's recital solo performance at the Parco Della Musica in Rome, Italy.",
    'First Place - Music Festival in Honor of Confucius',
    'Silver - 2021 Quebec International Music Competition',
    'Third Place - ENKOR International Competition',
  ];

  const [scrolling, setScrolling] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const step = direction === 'up' ? -2 : 2; // Scroll speed
      scrollRef.current.scrollBy({ top: step, behavior: 'smooth' });
    }
  };

  const startScroll = (direction: 'up' | 'down') => {
    setScrolling(true);
    const scrollInterval = setInterval(() => {
      if (scrolling) {
        handleScroll(direction);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  const stopScroll = () => {
    setScrolling(false);
  };

  return (
    <div className="carousel-container max-w-md mx-auto h-96 overflow-hidden relative border border-gray-300 rounded-lg">
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
            className="achievement-item text-center p-4 snap-center bg-white hover:bg-gray-100"
          >
            {achievement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsCarousel;

