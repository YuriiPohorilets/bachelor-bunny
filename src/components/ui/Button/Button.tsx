import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  fullWidth,
  className,
  ...props
}) => {
  const classNames = clsx(styles.button, fullWidth && styles.fullWidth, className);

  return (
    <button type={type} {...props} className={classNames}>
      <span className={styles.label}>Button</span>
      <span className={styles.icon}>icon</span>
    </button>
  );
};
