'use client';

import { useRef, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { AnimatePresence, motion, Transition } from 'motion/react';
import { Container, Section, SliderPagination } from '@/components/ui';
import { Label, Slider, SliderControls } from './components';
import SlideImg00 from '@/assets/images/home/services_slide-00.jpg';
import SlideImg01 from '@/assets/images/home/services_slide-01.jpg';
import SlideImg02 from '@/assets/images/home/services_slide-02.jpg';
import styles from './Services.module.scss';

const slides = [
  { id: 'hero_slide-00', src: SlideImg00.src, alt: 'Slide 1' },
  { id: 'hero_slide-01', src: SlideImg01.src, alt: 'Slide 2' },
  { id: 'hero_slide-02', src: SlideImg02.src, alt: 'Slide 3' },
];

const content = [
  {
    title: 'GRAB & GO',
    description: 'Your solution for busy days, with four gourmet meals delivered across two days.',
  },
  {
    title: 'In-Home Executive Delivery',
    description:
      'Luxury dining at home with beautiful Bunny Bells: delivery, cocktails, conversation.',
  },
  {
    title: 'Catering & Events',
    description: 'Elevate events with Bachelor Bunny Gourmet Catering, tailored for men.',
  },
];

export const Services = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrevSlide = () => swiperRef.current?.slidePrev();
  const handleNextSlide = () => swiperRef.current?.slideNext();
  const handleChangeSlide = (index: number) => swiperRef.current?.slideToLoop(index);
  const onSwiperInit = (swiper: SwiperClass) => (swiperRef.current = swiper);
  const onSwiperChange = (realIndex: number) => setActiveIndex(realIndex);

  const { title, description } = content[activeIndex];

  const variants = {
    initial: { opacity: 0, y: '-100%', scale: 0.8 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: '100%', scale: 0.8 },
  };

  const transition = { ease: 'easeInOut', duration: 0.8 } as Transition;

  return (
    <Section fullHeight className={styles.section}>
      <Container fullHeight>
        <div className={styles.wrapper}>
          <Slider slides={slides} onSwiper={onSwiperInit} onSlideChange={onSwiperChange} />

          <Label />

          <div className={styles.titleWrapper}>
            <AnimatePresence initial={false}>
              <motion.h2
                key={`${activeIndex}_title`}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transition}
                className={styles.title}
              >
                {title}
              </motion.h2>
            </AnimatePresence>
          </div>

          <div className={styles.pagination}>
            <SliderPagination
              totalSlides={slides.length}
              activeIndex={activeIndex}
              onChange={handleChangeSlide}
            />
          </div>

          <SliderControls onNextSlide={handleNextSlide} onPrevSlide={handlePrevSlide}>
            <div className={styles.descriptionWrapper}>
              <AnimatePresence initial={false}>
                <motion.p
                  key={`${activeIndex}_description`}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className={styles.description}
                >
                  {description}
                </motion.p>
              </AnimatePresence>
            </div>
          </SliderControls>
        </div>
      </Container>
    </Section>
  );
};
