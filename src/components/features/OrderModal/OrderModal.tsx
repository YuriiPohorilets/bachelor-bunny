import styles from './OrderModal.module.scss';

export const OrderModal: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}></div>
      <div className={styles.form}></div>
    </div>
  );
};
