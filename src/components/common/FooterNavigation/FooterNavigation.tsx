import Link from 'next/link';
import { footerNavigationList } from '@/constants/navigation';
import styles from './FooterNavigation.module.scss';

export const FooterNavigation: React.FC = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {footerNavigationList.map(item => (
          <li key={item.id}>
            <Link href={item.href!} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
