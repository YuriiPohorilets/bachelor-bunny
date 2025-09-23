'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';
import clsx from 'clsx';
import { Navigation } from '@/components/common';
import { Backdrop, BurgerMenu } from '@/components/ui';
import styles from './MobileMenu.module.scss';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const handleToggleMenu = () => {
    setIsOpen(prevIsOpen => {
      if (prevIsOpen) {
        lenis?.start();
      } else {
        lenis?.stop();
      }
      return !prevIsOpen;
    });
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    lenis?.start();
  };

  return (
    <>
      <BurgerMenu isOpen={isOpen} onClick={handleToggleMenu} />

      <div data-lenis-prevent className={clsx(styles.menu, isOpen && styles.open)}>
        <div className={styles.header}>
          <span className={clsx(styles.label, isOpen && styles.open)}>Menu</span>
        </div>

        <div className={styles.body}>
          <Navigation />
        </div>
      </div>

      <Backdrop isOpen={isOpen} onClose={handleCloseMenu} className={styles.backdrop} />
    </>
  );
};
