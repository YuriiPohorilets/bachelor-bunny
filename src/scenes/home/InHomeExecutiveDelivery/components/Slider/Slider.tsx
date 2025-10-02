import Image from 'next/image';
import clsx from 'clsx';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import styles from './Slider.module.scss';

interface SliderProps {
  slides: { id: string; src: string; alt: string }[];
  onSwiper: (swiper: SwiperClass) => void;
  onSlideChange: (realIndex: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ slides, onSwiper, onSlideChange }) => {
  return (
    <Swiper
      effect={'fade'}
      speed={1600}
      autoplay={{ delay: 3200 }}
      modules={[EffectFade, Autoplay]}
      preventClicks
      loop={true}
      onSwiper={onSwiper}
      onSlideChange={({ realIndex }) => onSlideChange(realIndex)}
      className={clsx(styles.swiper, styles.slider)}
    >
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id} className={styles.slide}>
          <Image src={src} alt={alt} fill={true} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
