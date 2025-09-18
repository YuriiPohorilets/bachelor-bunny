import { Container, Section } from '@/components/ui';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section id="home-hero" className={styles.section}>
      <Container>
        <div>Home page</div>
      </Container>
    </Section>
  );
};
