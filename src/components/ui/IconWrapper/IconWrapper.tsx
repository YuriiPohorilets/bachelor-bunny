import clsx from 'clsx';
import styles from './IconWrapper.module.scss';

interface IconWrapperProps {
  Icon: React.ComponentType<{ color?: string; className?: string }>;
  component?: React.ElementType;
  className?: string;
  color?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  Icon,
  component: Component = 'span',
  className,
  color = 'currentColor',
}) => {
  const classNames = clsx(styles.iconWrapper, className);

  return (
    <Component className={classNames}>
      <Icon color={color} />
    </Component>
  );
};
