'use client';

import { useEffect, useRef } from 'react';
import { cancelFrame, frame } from 'motion/react';
import { LenisOptions } from 'lenis';
import { ReactLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  const options: LenisOptions = {
    autoRaf: true,
    duration: 2,
    lerp: 0,
  };

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
};
