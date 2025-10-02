import clsx from 'clsx';
import styles from './Quote.module.scss';

interface QuoteProps extends React.PropsWithChildren {
  align: 'start' | 'center' | 'end';
  uppercase?: boolean;
  className?: string;
}

export const Quote: React.FC<QuoteProps> = ({ children, align, uppercase, className }) => {
  const classNames = clsx(styles.quote, styles[align], uppercase && styles.uppercase, className);

  return <p className={classNames}>{children}</p>;
};
