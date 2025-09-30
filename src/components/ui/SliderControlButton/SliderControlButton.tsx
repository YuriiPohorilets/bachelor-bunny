import clsx from 'clsx';
import { IconWrapper, Ripple } from '@/components/ui';
import { SliderControlsIcon } from '@/components/icons';
import styles from './SliderControlButton.module.scss';

interface SliderControlButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'next' | 'prev';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SliderControlButton: React.FC<SliderControlButtonProps> = ({
  variant,
  className,
  size = 'md',
  ...restProps
}) => {
  const classNames = clsx(styles.button, styles[variant], styles[size], className);

  return (
    <Ripple>
      <button
        type="button"
        aria-label={`${variant === 'prev' ? 'Back to previous slide' : 'Go to next slide'}`}
        {...restProps}
        className={classNames}
      >
        <IconWrapper Icon={SliderControlsIcon} className={styles.icon} />
      </button>
    </Ripple>
  );
};
