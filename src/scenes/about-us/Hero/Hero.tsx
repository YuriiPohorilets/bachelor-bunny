import { Container, Section } from '@/components/ui';
import styles from './Hero.module.scss';

const content = {
  title: 'Sophia Jennings',
  subtitle: 'Owner & Head chef',
  description: 'Crafting gourmet delights, personalized for your lifestyle',
};

export const Hero = () => {
  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            {content.title}
            <span>{content.subtitle}</span>
          </h1>

          <p className={styles.description}>{content.description}</p>
        </div>
      </Container>
    </Section>
  );
};
