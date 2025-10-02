'use client';

import { StarIcon } from '@/components/icons';
import styles from './Rating.module.scss';

interface RatingProps {
  value: number;
}

export const Rating: React.FC<RatingProps> = ({ value }) => {
  const getRatingArray = (rating: number) => {
    const result: number[] = [];
    const wholePart = Math.floor(rating);
    const fractionalPart = rating % 1;
    const maxRating = 5;

    for (let i = 0; i < maxRating; i += 1) {
      if (i < wholePart) {
        result.push(1);
      } else if (i === wholePart && fractionalPart > 0) {
        result.push(fractionalPart);
      } else {
        result.push(0);
      }
    }

    return result;
  };

  return (
    <ul className={styles.list}>
      {getRatingArray(value).map((rating, index) => (
        // <li key={index} className={styles.item}>
        <StarIcon key={index} offset={rating} />
        // </li>
      ))}
    </ul>
  );
};
