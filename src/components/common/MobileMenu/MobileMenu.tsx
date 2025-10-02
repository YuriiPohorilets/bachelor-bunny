'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import clsx from 'clsx';
import { Navigation } from '@/components/common';
import { Backdrop, BurgerMenu } from '@/components/ui';
import styles from './MobileMenu.module.scss';

export const MobileMenu: React.FC = () => {
  const pathname = usePathname();
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

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
    lenis?.start();
  }, [lenis]);

  useEffect(() => {
    handleCloseMenu();

    return () => {
      handleCloseMenu();
    };
  }, [handleCloseMenu, pathname]);

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
