import React, { useState, useRef } from 'react';

const AchievementsCarousel: React.FC = () => {
  const achievements: string[] = [
    'AIME Qualifier (2023): Scored 8, top ~800 out of ~300,000 American Math Competition contestants.',
    'USA Computing Olympiad Gold Division.',
    'Winner, American Fine Arts Festival at Carnegie Hall.',
    'Facebook Hacker Cup 2021 Round 2 Qualifier.',
    // Add more achievements as needed
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

