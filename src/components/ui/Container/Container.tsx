import clsx from 'clsx';
import styles from './Container.module.scss';

interface ContainerProps extends React.PropsWithChildren {
  fullHeight?: boolean;
  disablePadding?: boolean;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  fullHeight,
  disablePadding,
  className,
}) => {
  const classNames = clsx(
    styles.container,
    fullHeight && styles.fullHeight,
    disablePadding && styles.disablePadding,
    className
  );

  return <div className={classNames}>{children}</div>;
};
