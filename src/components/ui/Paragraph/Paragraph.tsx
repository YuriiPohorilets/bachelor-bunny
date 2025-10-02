import clsx from 'clsx';
import styles from './Paragraph.module.scss';

interface ParagraphProps extends React.PropsWithChildren {
  capitalFirstLetter?: boolean;
  className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  capitalFirstLetter,
  className,
}) => {
  const classNames = clsx(
    styles.paragraph,
    capitalFirstLetter && styles.capitalFirstLetter,
    className
  );

  return <p className={classNames}>{children}</p>;
};
