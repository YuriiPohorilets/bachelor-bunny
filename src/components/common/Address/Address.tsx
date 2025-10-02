import clsx from 'clsx';
import { IconWrapper } from '@/components/ui';
import { addressList } from '@/constants/address';
import { AddressItemType } from '@/types/address';
import styles from './Address.module.scss';

interface AddressProps {
  direction: 'row' | 'column';
  showIcon?: boolean;
  hideElements?: AddressItemType['id'][];
}

export const Address: React.FC<AddressProps> = ({ direction, showIcon, hideElements }) => {
  const classNames = clsx(styles.list, styles[direction]);

  const filteredList = addressList.filter(({ id }) => !hideElements?.includes(id));

  return (
    <address>
      <ul className={classNames}>
        {filteredList.map(({ id, label, href, Icon }) => (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              {showIcon && Icon && <IconWrapper Icon={Icon} className={styles.icon} />}
              <span className={styles.label}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};
