'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import clsx from 'clsx';
import { NavigationItemType, PagePath } from '@/types/navigation';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  item: NavigationItemType;
  variant?: 'default' | 'submenu';
  onClick?: () => void;
  onSubmenuClick?: () => void;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  variant = 'default',
  className,
  onClick,
  onSubmenuClick,
}) => {
  const lenis = useLenis();
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const classNames = clsx(styles.link, styles[variant], isActive && styles.active, className);

  const handleClick = () => {
    onClick?.();
    lenis?.scrollTo(0, { immediate: true });
  };

  switch (variant) {
    case 'submenu':
      return (
        <button type="button" onClick={onSubmenuClick} className={classNames}>
          {item.label}
        </button>
      );

    default:
      return (
        <Link href={item.href ?? PagePath.Home} onClick={handleClick} className={classNames}>
          {item.label}
        </Link>
      );
  }
};
