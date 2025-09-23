import { Button, Container, Section } from '@/components/ui';
import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section fullHeight={true} className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          Home page
          <div>
            <Button>Make an order</Button>

            <Button disabled>Make an order</Button>
          </div>
          <div>
            <Button color="accent">Make an order</Button>
            <Button color="accent" disabled>
              Make an order
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
