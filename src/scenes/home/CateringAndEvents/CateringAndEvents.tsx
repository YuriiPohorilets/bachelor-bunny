'use client';

import { Container, LinkButton, Paragraph, Section } from '@/components/ui';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import { PagePath } from '@/types/navigation';
import styles from './CateringAndEvents.module.scss';

const content = {
  title: 'Catering & Events',
  description:
    "Elevate your male-themed events with Bachelor Bunny Gourmet Catering&Events. We go beyond just providing food and seamless event management;  we deliver an unforgettable experience.\n Our premier catering service is tailored for bachelor parties, cigar nights, sports gatherings, and any guys' night, infusing a touch of gourmet sophistication into every event.",
};

export const CateringAndEvents = () => {
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <h2 className={isDesktop ? 'hidden' : styles.title}>{content.title}</h2>

          <div className={styles.content}>
            <Paragraph capitalFirstLetter={isDesktop} className={styles.description}>
              {content.description}
            </Paragraph>

            <LinkButton
              fullWidth={isDesktop}
              href={PagePath.CateringAndEvents}
              className={styles.link}
            >
              {isDesktop ? 'Catering & Events' : 'more'}
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
};
