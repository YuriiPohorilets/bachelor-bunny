'use client';

import styles from './Copyright.module.scss';

export const Copyright: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <span className={styles.copyright}>
      <span>&copy; {year}</span>
      <span>BACHELOR BUNNY</span>
    </span>
  );
};
