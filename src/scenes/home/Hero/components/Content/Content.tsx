import { IconWrapper } from '@/components/ui';
import { CrownIcon } from '@/components/icons';
import styles from './Content.module.scss';

export const Content: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <IconWrapper component={'div'} Icon={CrownIcon} className={styles.logo} />

        <h1 className={styles.title}>
          Bachelor Bunny
          <span>Gourmet</span>
        </h1>
      </div>

      <h2 className={styles.subtitle}>Delicious meals delivered to your door</h2>
    </div>
  );
};
