import styles from './Address.module.scss';

interface AddressProps {
  direction: 'row' | 'column';
}

export const Address: React.FC<AddressProps> = ({}) => {
  return <address className={styles.address}>Address</address>;
};
