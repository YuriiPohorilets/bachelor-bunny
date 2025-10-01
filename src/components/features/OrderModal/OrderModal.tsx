import { OrderForm } from '@/components/features';
import styles from './OrderModal.module.scss';

export const OrderModal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>Content</div>
      <div className={styles.form}>
        <OrderForm />
      </div>
    </div>
  );
};
