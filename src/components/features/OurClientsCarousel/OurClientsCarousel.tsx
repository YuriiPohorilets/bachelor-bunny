'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { ClientReview } from '@/components/features';
import SlideImg00 from '@/assets/images/home/clients_slide-00.jpg';
import SlideImg01 from '@/assets/images/home/clients_slide-01.jpg';
import SlideImg02 from '@/assets/images/home/clients_slide-02.jpg';
import SlideImg03 from '@/assets/images/home/clients_slide-03.jpg';
import SlideImg04 from '@/assets/images/home/clients_slide-04.jpg';
import styles from './OurClientsCarousel.module.scss';
import clsx from 'clsx';

const slides = [
  {
    id: 'clients_slide-00',
    slide: {
      title: 'Jason',
      image: SlideImg00,
      review: 'Graduation Party - a true feast of taste !!!!',
      rating: 4,
    },
  },
  {
    id: 'clients_slide-01',
    slide: {
      title: 'Tyler',
      image: SlideImg01,
      review: 'Los Angeles Themed Party - gourmet treats and impeccable staff:) ',
      rating: 5,
    },
  },
  {
    id: 'clients_slide-02',
    slide: {
      title: 'Michael',
      image: SlideImg02,
      review: 'Los Angeles Birthday Bash - exquisite food and fantastic ambiance!',
      rating: 4.5,
    },
  },
  {
    id: 'clients_slide-03',
    slide: {
      title: 'Brandon',
      image: SlideImg03,
      review: 'Los Angeles Party - unforgettable menu and top-notch service!',
      rating: 4,
    },
  },
  {
    id: 'clients_slide-04',
    slide: {
      title: 'Brian',
      image: SlideImg04,
      review: 'Chicago Bachelor Bash - Delicious dishes and incredible beauties Bells!',
      rating: 5,
    },
  },
];

interface OurClientsCarouselProps {
  renderControls?: ({
    activeIndex,
    totalSlides,
    onNextSlide,
    onPrevSlide,
    onChangeSlide,
  }: {
    activeIndex: number;
    totalSlides: number;
    onNextSlide: () => void;
    onPrevSlide: () => void;
    onChangeSlide: (index: number) => void;
  }) => React.ReactNode;
}

export const OurClientsCarousel: React.FC<OurClientsCarouselProps> = ({ renderControls }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalSlides = slides.length;

  const handlePrevSlide = () => swiperRef.current?.slidePrev();
  const handleNextSlide = () => swiperRef.current?.slideNext();
  const handleChangeSlide = (index: number) => swiperRef.current?.slideToLoop(index);
  const onSwiperInit = (swiper: SwiperClass) => (swiperRef.current = swiper);
  const onSwiperChange = (realIndex: number) => setActiveIndex(realIndex);

  return (
    <div className={styles.wrapper}>
      <Swiper
        grabCursor
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        rewind
        speed={800}
        onSwiper={onSwiperInit}
        onSlideChange={({ realIndex }) => onSwiperChange(realIndex)}
        className={clsx(styles.swiper, styles.slider)}
      >
        {slides.map(item => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <ClientReview item={item.slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {renderControls &&
        renderControls({
          activeIndex,
          totalSlides,
          onChangeSlide: handleChangeSlide,
          onNextSlide: handleNextSlide,
          onPrevSlide: handlePrevSlide,
        })}
    </div>
  );
};
