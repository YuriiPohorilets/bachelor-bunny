import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Backdrop.module.scss';

interface BackdropProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({ className, isOpen, onClose }) => {
  const classNames = clsx(styles.backdrop, className);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          aria-label="Backdrop"
          onClick={onClose}
          className={classNames}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};
