'use client';

import { useLenis } from 'lenis/react';
import { Ripple } from '@/components/ui';
import styles from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
  onClick?: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onClick }) => {
  const lenis = useLenis();

  const handleClick = () => {
    lenis?.scrollTo(0);
    onClick?.();
  };

  return (
    <Ripple>
      <button type="button" onClick={handleClick} className={styles.button}>
        Back to top
      </button>
    </Ripple>
  );
};
