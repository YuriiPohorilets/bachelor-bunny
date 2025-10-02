import Image, { StaticImageData } from 'next/image';
import styles from './ClientReview.module.scss';
import { Rating } from '@/components/ui/Rating/Rating';

interface ClientReviewProps {
  item: {
    image: StaticImageData;
    title: string;
    rating: number;
    review: string;
  };
}

export const ClientReview: React.FC<ClientReviewProps> = ({ item }) => {
  const { image, title, review, rating } = item;

  return (
    <article className={styles.wrapper}>
      <Image
        alt={`Client ${title}`}
        src={image}
        width={434}
        height={434}
        className={styles.image}
      />

      <section className={styles.body}>
        <div className={styles.inlineWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <Rating value={rating} />
        </div>

        <p className={styles.text}>{review}</p>
      </section>
    </article>
  );
};
