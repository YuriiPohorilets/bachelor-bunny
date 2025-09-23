import clsx from 'clsx';
import { Ripple } from '@/components/ui';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: 'primary' | 'accent';
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fullWidth,
  className,
  children,
  color = 'primary',

  ...props
}) => {
  const classNames = clsx(styles.button, styles[color], fullWidth && styles.fullWidth, className);
  const rippleColor = color === 'primary' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)';

  return (
    <Ripple color={rippleColor}>
      <button type={type} {...props} className={classNames}>
        {children}
      </button>
    </Ripple>
  );
};
