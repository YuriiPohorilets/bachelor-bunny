import Image from 'next/image';
import ContentImg00 from '@/assets/images/home/about_content.png';
import styles from './Media.module.scss';

export const Media: React.FC = () => {
  return (
    <div className={styles.media}>
      <div className={styles.imageWrapper}>
        <Image src={ContentImg00} alt="Plate of food" fill={false} className={styles.image} />
      </div>
    </div>
  );
};
