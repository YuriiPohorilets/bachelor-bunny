import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NavigationItemType, PagePath } from '@/types/navigation';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  item: NavigationItemType;
  variant?: 'default' | 'submenu';
  onClick?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  variant = 'default',
  className,
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const classNames = clsx(styles.link, styles[variant], isActive && styles.active, className);

  switch (variant) {
    case 'submenu':
      return (
        <button type="button" onClick={onClick} className={classNames}>
          {item.label}
        </button>
      );

    default:
      return (
        <Link href={item.href ?? PagePath.Home} onClick={onClick} className={classNames}>
          {item.label}
        </Link>
      );
  }
};
