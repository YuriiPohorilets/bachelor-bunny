import type { NavigationItem as NavigationItemType } from '@/types/navigation';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  item: NavigationItemType;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ item }) => {
  if (item.href) {
    return <></>;
  }

  return <div>NavigationItem</div>;
};
