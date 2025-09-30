import { SliderControlButton } from '@/components/ui';
import styles from './SliderControls.module.scss';

interface SliderControlsProps extends React.PropsWithChildren {
  onNextSlide: () => void;
  onPrevSlide: () => void;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  children,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <div className={styles.controls}>
      <div className={styles.prev}>
        <SliderControlButton size="lg" variant="prev" onClick={onPrevSlide} />
      </div>

      {children}

      <div className={styles.next}>
        <SliderControlButton size="lg" variant="next" onClick={onNextSlide} />
      </div>
    </div>
  );
};
