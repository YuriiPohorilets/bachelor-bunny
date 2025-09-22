import { Navigation } from '@/components/common';

import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  return (
    <div className={styles.menu}>
      <Navigation />
    </div>
  );
};
