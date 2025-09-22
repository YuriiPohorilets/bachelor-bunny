'use client';

import { usePathname } from 'next/navigation';
import { Container, ScrollToTopButton } from '@/components/ui';
import { Copyright } from '@/components/common';
import { PagePath } from '@/types/navigation';
import { MediaQuery } from '@/types/media-query';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);
  const showFooter = pathname !== PagePath.ContactUs;

  if (!showFooter) {
    return <></>;
  }

  return (
    <footer className={styles.footer}>
      <Container>
        <div></div>

        <div></div>

        <div className={styles.copyright}>
          <Copyright />
          {isDesktop && <ScrollToTopButton />}
        </div>
      </Container>
    </footer>
  );
};
