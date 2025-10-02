'use client';

import { Container, Section } from '@/components/ui';
import { OurClientsCarousel } from '@/components/features';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import styles from './OurClients.module.scss';

const content = {
  title: 'Our clients',
};

export const OurClients = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  return (
    <Section className={styles.section}>
      <Container disablePadding>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{content.title}</h2>
          <OurClientsCarousel showPagination={!isDesktop} />
        </div>
      </Container>
    </Section>
  );
};
