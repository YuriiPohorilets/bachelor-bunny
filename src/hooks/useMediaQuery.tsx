'use client';

import { useEffect, useState } from 'react';
import { MediaQuery } from '@/types/media-query';

const useMediaQuery = (query: MediaQuery): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [matches, query]);

  return matches;
};

export { useMediaQuery };
