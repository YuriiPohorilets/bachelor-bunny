'use client';

import { Logo, MobileMenu, Navigation } from '@/components/common';
import { Container } from '@/components/ui';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Logo />
          {isDesktop ? <Navigation /> : <MobileMenu />}
        </div>
      </Container>
    </header>
  );
};
