'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { NavigationItem, Submenu } from '@/components/common/Navigation/components';
import { navigation } from '@/constants/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import styles from './Navigation.module.scss';

const DEFAULT_SUBMENU_INDEX = 2;

export const Navigation: React.FC = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);
  const [submenuIndex, setSubmenuIndex] = useState<number | null>(null);

  const handleSubmenuOpen = (index: number) => {
    if (!isDesktop) return;
    setSubmenuIndex(index);
  };

  const handleSubmenuClose = () => {
    if (!isDesktop) return;
    setSubmenuIndex(null);
  };

  const handleSubmenuToggle = (index: number) => {
    if (isDesktop) {
      setSubmenuIndex(index);
    } else {
      setSubmenuIndex(prevIndex => (prevIndex === index ? null : index));
    }
  };

  useEffect(() => {
    if (!isDesktop) {
      setSubmenuIndex(DEFAULT_SUBMENU_INDEX);
    } else {
      setSubmenuIndex(null);
    }
  }, [isDesktop]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navigation.map((item, index) => {
          const hasSubmenu = item.subitems && item.subitems.length > 0;
          const isSubmenuOpen = submenuIndex === index;

          return (
            <li
              key={`item_${item.id}`}
              onMouseEnter={() => handleSubmenuOpen(index)}
              onMouseLeave={handleSubmenuClose}
              className={styles.item}
            >
              <NavigationItem
                item={item}
                variant={hasSubmenu ? 'submenu' : 'default'}
                onSubmenuClick={() => handleSubmenuToggle(index)}
                className={styles.link}
              />

              <AnimatePresence initial={false}>
                {hasSubmenu && isSubmenuOpen && <Submenu items={item.subitems!} />}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
