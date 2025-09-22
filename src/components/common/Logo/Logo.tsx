import Link from 'next/link';
import { CrownIcon } from '@/components/icons';
import { IconWrapper } from '@/components/ui';
import { PagePath } from '@/types/navigation';
import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <Link href={PagePath.Home} aria-label="BBG Logo" className={styles.logo}>
      <IconWrapper Icon={CrownIcon} className={styles.icon} />
      <span className={styles.text}>BBG</span>
    </Link>
  );
};
