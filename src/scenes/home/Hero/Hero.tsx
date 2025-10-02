import { Container, Section } from '@/components/ui';
import { Slider, Content, Benefits, OrderButton } from './components';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <Slider />
          <Content />
          <Benefits />
          <OrderButton />
        </div>
      </Container>
    </Section>
  );
};
