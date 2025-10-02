'use client';

import { AnimatePresence, motion } from 'motion/react';
import clsx from 'clsx';
import { Button } from '@/components/ui';
import { useModal } from '@/app/(providers)/modal/modal-context';
import { ModalName } from '@/app/(providers)/modal/types';
import styles from './OrderButton.module.scss';

export const OrderButton: React.FC = () => {
  const { modalName, openModal } = useModal();
  const isModalOpen = modalName === ModalName.Order;

  const handleOrderClick = () => {
    openModal({
      name: ModalName.Order,
      options: { className: styles.orderModal },
    });
  };

  return (
    <AnimatePresence>
      <motion.div className={clsx(styles.orderButton, isModalOpen && styles.open)}>
        <Button
          disabled={isModalOpen}
          fullWidth
          onClick={handleOrderClick}
          className={styles.button}
        >
          Make an order
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
