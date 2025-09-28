'use client';

import { Container, Section } from '@/components/ui';
import { Content, Media } from './components';
import styles from './About.module.scss';

export const About = () => {
  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <h2 className="hidden">About</h2>
          <Content />
          <Media />
        </div>
      </Container>
    </Section>
  );
};
