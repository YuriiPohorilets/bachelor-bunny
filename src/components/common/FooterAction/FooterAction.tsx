import { IconWrapper, LinkButton } from '@/components/ui';
import { CrownIcon } from '@/components/icons';
import { PagePath } from '@/types/navigation';
import styles from './FooterAction.module.scss';

export const FooterAction: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <IconWrapper Icon={CrownIcon} className={styles.icon} />

        <span className={styles.label}>
          Bachelor Bunny <span>Gourmet</span>
        </span>
      </div>

      <p className={styles.description}>
        Contact us to see what <br /> we have available.
      </p>

      <LinkButton fullWidth href={PagePath.ContactUs} className={styles.link}>
        Contact us
      </LinkButton>
    </div>
  );
};
