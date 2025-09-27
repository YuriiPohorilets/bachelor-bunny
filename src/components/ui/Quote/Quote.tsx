import clsx from 'clsx';
import styles from './Quote.module.scss';

interface QuoteProps extends React.PropsWithChildren {
  align: 'start' | 'center' | 'end';
  uppercase?: boolean;
}

export const Quote: React.FC<QuoteProps> = ({ children, align, uppercase }) => {
  const classNames = clsx(styles.quote, styles[align], uppercase && styles.uppercase);

  return <p className={classNames}>{children}</p>;
};
