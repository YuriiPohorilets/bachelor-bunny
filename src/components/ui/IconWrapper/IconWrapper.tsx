import clsx from 'clsx';
import styles from './IconWrapper.module.scss';

interface IconWrapperProps {
  Icon: React.ComponentType<{ color?: string; className?: string }>;
  component?: React.ElementType;
  className?: string;
  color?: string;
  onClick?: () => void;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  Icon,
  component: Component = 'span',
  className,
  color = 'currentColor',
  onClick,
  ...restProps
}) => {
  const classNames = clsx(styles.iconWrapper, className);

  return (
    <Component {...restProps} onClick={onClick} className={classNames}>
      <Icon color={color} />
    </Component>
  );
};
