'use client';

import { useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { Container, LinkButton, Paragraph, Section, SliderPagination } from '@/components/ui';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { MediaQuery } from '@/types/media-query';
import { PagePath } from '@/types/navigation';
import { Slider } from './components';
import SlideImg00 from '@/assets/images/home/delivery_slide-00.jpg';
import SlideImg01 from '@/assets/images/home/delivery_slide-01.jpg';
import styles from './InHomeExecutiveDelivery.module.scss';

const content = {
  title: 'In Home\n Executive Delivery',
  description:
    'Experience luxury dining at home with our elevated service! Our attractive customer service - Bunny Bells not only deliver your pre-cooked dinner and pour a perfectly paired cocktail but also engage in light conversation as they plate\n your meal. You`re left to enjoy your dinner while they head to the next delivery.',
};

const slides = [
  { id: 'delivery_slide-00', src: SlideImg00.src, alt: 'Slide 1' },
  { id: 'delivery_slide-01', src: SlideImg01.src, alt: 'Slide 2' },
];

export const InHomeExecutiveDelivery = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isDesktop = useMediaQuery(MediaQuery.DesktopSM);

  const handleChangeSlide = (index: number) => swiperRef.current?.slideToLoop(index);
  const onSwiperInit = (swiper: SwiperClass) => (swiperRef.current = swiper);
  const onSwiperChange = (realIndex: number) => setActiveIndex(realIndex);

  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight className={styles.container}>
        <div className={styles.wrapper}>
          <Slider onSwiper={onSwiperInit} onSlideChange={onSwiperChange} slides={slides} />

          <h2 className={isDesktop ? 'hidden' : styles.title}>{content.title}</h2>

          <div className={styles.content}>
            <Paragraph capitalFirstLetter={isDesktop} className={styles.description}>
              {content.description}
            </Paragraph>

            {!isDesktop && (
              <div className={styles.pagination}>
                <SliderPagination
                  totalSlides={slides.length}
                  activeIndex={activeIndex}
                  onChange={handleChangeSlide}
                />
              </div>
            )}

            <LinkButton fullWidth={isDesktop} href={PagePath.Delivery} className={styles.link}>
              {isDesktop ? 'In-Home Executive' : 'more'}
              {isDesktop && <span className={styles.linkLabel}>Delivery</span>}
            </LinkButton>
          </div>

          {isDesktop && (
            <div className={styles.pagination}>
              <SliderPagination
                totalSlides={slides.length}
                activeIndex={activeIndex}
                onChange={handleChangeSlide}
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
