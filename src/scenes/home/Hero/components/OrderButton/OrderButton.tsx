'use client';

import { AnimatePresence, motion } from 'motion/react';
import { Button } from '@/components/ui';
import { useModal } from '@/app/(providers)/modal-context';
import { ModalName } from '@/app/(providers)/types';
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
      {!isModalOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          className={styles.orderButton}
        >
          <Button disabled={isModalOpen} fullWidth onClick={handleOrderClick}>
            Make an order
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
