import clsx from 'clsx';
import { Ripple } from '@/components/ui';
import styles from './FormButton.module.scss';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  renderIconStart?: () => React.ReactNode;
  renderIconEnd?: () => React.ReactNode;
}

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  renderIconStart,
  renderIconEnd,
  className,
  ...restProps
}) => {
  const classNames = clsx(styles.button, className);

  return (
    <Ripple>
      <button type="button" {...restProps} className={classNames}>
        {renderIconStart && renderIconStart()}
        {children}
        {renderIconEnd && renderIconEnd()}
      </button>
    </Ripple>
  );
};
