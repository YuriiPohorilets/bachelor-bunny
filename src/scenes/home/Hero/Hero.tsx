import { Container, Section } from '@/components/ui';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section fullHeight={true} className={styles.section}>
      <Container>
        <div className={styles.wrapper}>Home page</div>
      </Container>
    </Section>
  );
};
