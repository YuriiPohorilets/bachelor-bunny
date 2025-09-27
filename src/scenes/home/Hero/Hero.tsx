'use client';

import { Button, Container, Section } from '@/components/ui';
import { useModal } from '@/app/(providers)/modal-context';
import { ModalName } from '@/app/(providers)/types';
import styles from './Hero.module.scss';

export const Hero = () => {
  const { openModal } = useModal();

  const handleOrderClick = () => {
    openModal({
      name: ModalName.Order,
      options: { className: styles.orderModal },
    });
  };

  return (
    <Section fullHeight={true} className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          Home page
          <div className={styles.orderButton}>
            <Button fullWidth onClick={handleOrderClick}>
              Make an order
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
