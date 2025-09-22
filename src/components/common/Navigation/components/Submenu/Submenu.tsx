import clsx from 'clsx';
import { motion } from 'motion/react';
import { NavigationItem } from '@/components/common/Navigation/components';
import { NavigationItemType } from '@/types/navigation';
import styles from './Submenu.module.scss';

interface SubmenuProps {
  items: NavigationItemType[];
}

export const Submenu: React.FC<SubmenuProps> = ({ items }) => {
  const classNames = clsx(styles.submenu);

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={classNames}
    >
      <ul className={styles.list}>
        {items.map(item => (
          <motion.li
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={item.id}
          >
            <NavigationItem item={item} className={styles.link} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
