"use client";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./bannerSwiper.module.scss";

import "swiper/css/navigation";
import "swiper/css";
import { useRef, useState } from "react";

interface BannerSlide {
  img: string;
  title: string;
  desc: string;
  pagination: {
    category: string;
  };
}

const BannerSwiper = ({ slides }: { slides: BannerSlide[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.bannerSwiper}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        modules={[Navigation]}
        grabCursor
        initialSlide={0}
        slidesPerView="auto"
        navigation
        className={styles.swiper}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.textSlide}>
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.img}
                  alt="Banner Image"
                  // fill
                  width={1920}
                  height={1080}
                  priority
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.pagination}>
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`${index === activeIndex ? styles.active : ""} ${styles.paginationItem}`}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            {slide.pagination.category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BannerSwiper;
