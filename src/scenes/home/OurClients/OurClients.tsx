'use client';

import { Container, Section, SliderControlButton, SliderPagination } from '@/components/ui';
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
          <OurClientsCarousel
            renderControls={({
              totalSlides,
              activeIndex,
              onChangeSlide,
              onNextSlide,
              onPrevSlide,
            }) => (
              <div className={styles.controls}>
                <SliderControlButton variant="prev" size="md" onClick={onPrevSlide} />
                {!isDesktop && (
                  <SliderPagination
                    totalSlides={totalSlides}
                    activeIndex={activeIndex}
                    onChange={onChangeSlide}
                  />
                )}
                <SliderControlButton variant="next" size="md" onClick={onNextSlide} />
              </div>
            )}
          />
        </div>
      </Container>
    </Section>
  );
};
