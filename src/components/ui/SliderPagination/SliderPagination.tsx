import clsx from 'clsx';
import styles from './SliderPagination.module.scss';

interface SliderPaginationProps {
  totalSlides: number;
  activeIndex: number;
  onChange: (index: number) => void;
}

export const SliderPagination: React.FC<SliderPaginationProps> = ({
  totalSlides,
  activeIndex,
  onChange,
}) => {
  const bullets = Array.from({ length: totalSlides });

  return (
    <div className={styles.pagination}>
      {bullets.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index)}
          aria-label={`Go to slide ${index}`}
          className={clsx(styles.button, activeIndex === index && styles.active)}
        />
      ))}
    </div>
  );
};
