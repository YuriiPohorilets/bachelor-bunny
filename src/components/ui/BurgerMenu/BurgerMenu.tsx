import clsx from 'clsx';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClick }) => {
  const classNames = clsx(styles.button, isOpen && styles.open);

  return (
    <button
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      onClick={onClick}
      className={classNames}
    >
      <span className={styles.label}>Menu</span>
      <span className={styles.icon}>
        <span className={styles.iconItem}></span>
      </span>
    </button>
  );
};
