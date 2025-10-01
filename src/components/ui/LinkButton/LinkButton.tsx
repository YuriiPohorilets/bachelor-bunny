import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { OutwardArrowIcon } from '@/components/icons';
import { IconWrapper, Ripple } from '@/components/ui';
import styles from './LinkButton.module.scss';

interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  hideIcon?: boolean;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  fullWidth,
  hideIcon,
  className,
  ...restProps
}) => {
  const classNames = clsx(styles.link, fullWidth && styles.fullWidth, className);

  return (
    <Ripple>
      <Link {...restProps} className={classNames}>
        <span className={styles.label}>{children}</span>
        {!hideIcon && <IconWrapper Icon={OutwardArrowIcon} className={styles.icon} />}
      </Link>
    </Ripple>
  );
};
