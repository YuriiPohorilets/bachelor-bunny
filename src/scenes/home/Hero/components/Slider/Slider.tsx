'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import SlideImg00 from '@/assets/images/home/hero_slide-00.jpg';
import SlideImg01 from '@/assets/images/home/hero_slide-01.jpg';
import styles from './Slider.module.scss';

const slides = [
  { id: 'hero_slide-00', src: SlideImg00, alt: 'Slide 1' },
  { id: 'hero_slide-01', src: SlideImg01, alt: 'Slide 2' },
];

export const Slider: React.FC = () => {
  return (
    <Swiper
      effect={'fade'}
      speed={1600}
      autoplay={{ delay: 3200 }}
      modules={[EffectFade, Autoplay]}
      preventClicks
      className={clsx(styles.swiper, styles.slider)}
    >
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id} className={styles.slide}>
          <Image src={src} alt={alt} priority={true} fill={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
