import styles from './Social.module.scss';

interface SocialProps {
  direction: 'row' | 'column';
  variant: 'text' | 'icon';
}

export const Social: React.FC<SocialProps> = ({}) => {
  return (
    <ul className={styles.list}>
      <li>
        <a href=""></a>
      </li>
    </ul>
  );
};
