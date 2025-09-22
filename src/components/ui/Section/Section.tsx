import clsx from 'clsx';
import styles from './Section.module.scss';

interface SectionProps extends React.PropsWithChildren {
  id?: string;
  fullHeight?: boolean;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className, fullHeight }) => {
  const classNames = clsx(styles.section, fullHeight && styles.fullHeight, className);

  return (
    <section id={id} className={classNames}>
      {children}
    </section>
  );
};
