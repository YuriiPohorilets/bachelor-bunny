import clsx from 'clsx';
import styles from './Container.module.scss';

interface ContainerProps extends React.PropsWithChildren {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const classNames = clsx(styles.container, className);

  return <div className={classNames}>{children}</div>;
};
