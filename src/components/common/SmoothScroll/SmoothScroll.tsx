'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { cancelFrame, frame } from 'motion/react';
import { LenisOptions } from 'lenis';
import { ReactLenis, useLenis } from 'lenis/react';
import type { LenisRef } from 'lenis/react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const update = (data: { timestamp: number }) => {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    };

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, pathname]);

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
