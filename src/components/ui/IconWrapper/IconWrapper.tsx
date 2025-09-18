import clsx from 'clsx';
import styles from './IconWrapper.module.scss';

interface IconWrapperProps {
  icon: React.ReactNode;
  component?: React.ElementType;
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  component: Component = 'span',
  className,
}) => {
  const classNames = clsx(styles.iconWrapper, className);

  return <Component className={classNames}>{icon}</Component>;
};
