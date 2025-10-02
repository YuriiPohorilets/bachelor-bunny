'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { ClientReview } from '@/components/features';
import { SliderControlButton, SliderPagination } from '@/components/ui';
import SlideImg00 from '@/assets/images/home/clients_slide-00.jpg';
import SlideImg01 from '@/assets/images/home/clients_slide-01.jpg';
import SlideImg02 from '@/assets/images/home/clients_slide-02.jpg';
import SlideImg03 from '@/assets/images/home/clients_slide-03.jpg';
import SlideImg04 from '@/assets/images/home/clients_slide-04.jpg';
import styles from './OurClientsCarousel.module.scss';

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
  showPagination?: boolean;
}

export const OurClientsCarousel: React.FC<OurClientsCarouselProps> = ({ showPagination }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
        className={styles.slider}
      >
        {slides.map(item => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <ClientReview item={item.slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controls}>
        <SliderControlButton variant="prev" size="md" onClick={handlePrevSlide} />
        {showPagination && (
          <SliderPagination
            totalSlides={slides.length}
            activeIndex={activeIndex}
            onChange={handleChangeSlide}
          />
        )}
        <SliderControlButton variant="next" size="md" onClick={handleNextSlide} />
      </div>
    </div>
  );
};
