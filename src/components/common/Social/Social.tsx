import { socialList } from '@/constants/social';
import styles from './Social.module.scss';
import clsx from 'clsx';

interface SocialProps {
  direction: 'row' | 'column';
  variant: 'text' | 'icon';
  color?: 'primary' | 'secondary';
}

export const Social: React.FC<SocialProps> = ({ direction, variant, color = 'primary' }) => {
  const classNames = clsx(styles.list, styles[direction]);

  return (
    <ul className={classNames}>
      {socialList.map(({ id, href, label, Icon }) => (
        <li key={id}>
          <a
            href={href}
            aria-label={label}
            rel="noopener noreferrer"
            target="_blank"
            className={clsx(styles.link, styles[variant], styles[color])}
          >
            {variant === 'icon' ? <Icon /> : label}
          </a>
        </li>
      ))}
    </ul>
  );
};
