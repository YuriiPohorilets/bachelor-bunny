import { navigation } from '@/constants/navigation';
import { NavigationItem } from '@/components/common';
import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {navigation.map(item => (
          <li key={item.id}>
            <NavigationItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
