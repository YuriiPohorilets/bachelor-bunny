'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';
import { IconWrapper } from '@/components/ui';
import { CloseIcon } from '@/components/icons';
import styles from './Modal.module.scss';

interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, className }) => {
  const classNames = clsx(styles.modal, className);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // if (!isOpen) {
  //   return null;
  // }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          data-lenis-prevent
          className={classNames}
        >
          <button
            type="button"
            aria-label="Closes modal"
            onClick={onClose}
            className={styles.close}
          >
            <IconWrapper Icon={CloseIcon} />
          </button>

          <div className={styles.content}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
