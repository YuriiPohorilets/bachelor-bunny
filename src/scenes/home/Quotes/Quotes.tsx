import { Container, IconWrapper, Quote, Section } from '@/components/ui';
import { CrownIcon } from '@/components/icons';
import styles from './Quotes.module.scss';

const content = {
  title: 'Advantage',
  quote:
    'Bachelor bunny gourmet delivers convenient and luxurious home-style meals\n to your doorstep',
};

export const Quotes = () => {
  return (
    <Section className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <h2 className="hidden">{content.title}</h2>

          <div className={styles.logo}>
            <IconWrapper Icon={CrownIcon} className={styles.icon} />
            <span className={styles.label}>BBG</span>
          </div>

          <Quote align="center" uppercase className={styles.quote}>
            {content.quote}
          </Quote>
        </div>
      </Container>
    </Section>
  );
};
