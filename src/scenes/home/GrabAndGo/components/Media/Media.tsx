import Image from 'next/image';
import Img00 from '@/assets/images/home/grab-and-go_content-00.jpg';
import Img01 from '@/assets/images/home/grab-and-go_content-01.jpg';
import styles from './Media.module.scss';

const images = [
  { id: 'media-img-00', alt: 'img', src: Img00, width: 940, height: 557 },
  { id: 'media-img-01', alt: 'img', src: Img01, width: 467, height: 478 },
];

export const Media = () => {
  return (
    <div className={styles.media}>
      {images.map(({ id, src, alt, width, height }) => (
        <div key={id} className={styles.imageWrapper}>
          <Image src={src} alt={alt} width={width} height={height} className={styles.image} />
        </div>
      ))}
    </div>
  );
};
