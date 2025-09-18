'use client';

import { usePathname } from 'next/navigation';
import { Copyright } from '@/components/common';
import { ScrollToTopButton } from '@/components/ui';
import { PagePath } from '@/types/navigation';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const showFooter = pathname !== PagePath.ContactUs;

  if (!showFooter) {
    return <></>;
  }

  return (
    <footer className={styles.footer}>
      <div></div>

      <div></div>

      <div>
        <Copyright />
        <ScrollToTopButton />
      </div>
    </footer>
  );
};
