import React, { useEffect, useRef } from 'react';
import styles from '../styles/DotAnimation.module.css';

interface DotAnimationProps {
  onComplete: () => void;
}

const DotAnimation: React.FC<DotAnimationProps> = ({ onComplete }) => {
  const dot1Ref = useRef<SVGCircleElement | null>(null);
  const dot2Ref = useRef<SVGCircleElement | null>(null);
  const trail1Ref = useRef<SVGPolylineElement | null>(null);
  const trail2Ref = useRef<SVGPolylineElement | null>(null);

  useEffect(() => {
    const boxPath = [
      { x: '30%', y: '20%' },
      { x: '70%', y: '20%' },
      { x: '70%', y: '60%' },
      { x: '30%', y: '60%' },
      { x: '30%', y: '20%' },
    ];

    let trails = { trail1: [], trail2: [] };

    const moveToBoundingBox = (
      dotRef: React.RefObject<SVGCircleElement | null>,
      trailKey: 'trail1' | 'trail2',
      startPoint: { x: string; y: string },
      callback: () => void
    ) => {
      if (!dotRef.current) return;

      let y = parseInt(startPoint.y);
      const moveDot = () => {
        y -= 1;
        if (dotRef.current) {
          dotRef.current.setAttribute('cy', `${y}%`);
          trails[trailKey].push({ x: startPoint.x, y: `${y}%` });
          updateTrail(trailKey);
        }

        if (y <= parseInt(boxPath[0].y)) {
          callback();
        } else {
          requestAnimationFrame(moveDot);
        }
      };
      requestAnimationFrame(moveDot);
    };

    const traceBox = (
      dotRef: React.RefObject<SVGCircleElement | null>,
      trailKey: 'trail1' | 'trail2',
      startIndex: number
    ) => {
      if (!dotRef.current) return;

      let currentIndex = startIndex;
      const traceDot = () => {
        const nextIndex = (currentIndex + 1) % boxPath.length;
        const nextPoint = boxPath[nextIndex];
        if (dotRef.current) {
          dotRef.current.setAttribute('cx', nextPoint.x);
          dotRef.current.setAttribute('cy', nextPoint.y);
          trails[trailKey].push(nextPoint);
          updateTrail(trailKey);
        }
        currentIndex = nextIndex;

        if (currentIndex === boxPath.length - 1) {
          onComplete();
        } else {
          requestAnimationFrame(traceDot);
        }
      };
      requestAnimationFrame(traceDot);
    };

    const updateTrail = (trailKey: 'trail1' | 'trail2') => {
      const trailRef = trailKey === 'trail1' ? trail1Ref.current : trail2Ref.current;
      if (trailRef) {
        const points = trails[trailKey]
          .map(({ x, y }) => `${x} ${y}`)
          .join(' ');
        trailRef.setAttribute('points', points);
      }
    };

    moveToBoundingBox(dot1Ref, 'trail1', { x: '50%', y: '10%' }, () =>
      traceBox(dot1Ref, 'trail1', 0)
    );
    moveToBoundingBox(dot2Ref, 'trail2', { x: '50%', y: '10%' }, () =>
      traceBox(dot2Ref, 'trail2', 2)
    );
  }, [onComplete]);

  return (
    <svg className={styles.svg}>
      <rect className={styles.boundingBox} x="30%" y="20%" width="40%" height="40%" />
      <circle ref={dot1Ref} cx="50%" cy="10%" r="5" className={styles.dot} />
      <circle ref={dot2Ref} cx="50%" cy="10%" r="5" className={styles.dot} />
      <polyline ref={trail1Ref} className={styles.trail} />
      <polyline ref={trail2Ref} className={styles.trail} />
    </svg>
  );
};

export default DotAnimation;

