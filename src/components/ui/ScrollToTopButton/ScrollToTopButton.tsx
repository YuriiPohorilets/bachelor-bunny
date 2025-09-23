'use client';

import styles from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
  onClick?: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button type="button" onClick={handleClick} className={styles.button}>
      Back to top
    </button>
  );
};
