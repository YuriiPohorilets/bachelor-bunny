import { Button, Container, LinkButton, Section } from '@/components/ui';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section fullHeight={true} className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          Home page
          <LinkButton href={'/'}>more</LinkButton>
          <LinkButton href={'/'}>CONTACT US</LinkButton>
        </div>
      </Container>
    </Section>
  );
};
