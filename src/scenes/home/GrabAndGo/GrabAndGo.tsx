import { Container, Section } from '@/components/ui';
import { Content, Media } from './components';
import styles from './GrabAndGo.module.scss';

export const GrabAndGo = () => {
  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <Media />
          <Content />
        </div>
      </Container>
    </Section>
  );
};
