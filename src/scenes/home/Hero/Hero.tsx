import { Container, Section } from '@/components/ui';
import styles from './Hero.module.scss';
import { Social } from '@/components/common';

export const Hero = () => {
  return (
    <Section fullHeight={true} className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          Home page
          <Social direction="row" variant="icon" />
          <Social direction="column" variant="icon" />
          <Social direction="row" variant="text" />
          <Social direction="column" variant="text" />
        </div>
      </Container>
    </Section>
  );
};
