import clsx from 'clsx';
import styles from './Section.module.scss';

interface SectionProps extends React.PropsWithChildren {
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  const classNames = clsx(styles.section, className);

  return (
    <section id={id} className={classNames}>
      {children}
    </section>
  );
};
