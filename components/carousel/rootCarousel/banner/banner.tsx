"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { bannerSlides } from "@/constants/rootBannerData";
import styles from "./banner.module.scss";

import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";

interface BannerSlide {
  img: string;
  subtitle: string;
  body: string;
  title: string;
  lightDesc: string;
  categoryButton: string;
  pagination: {
    category: string;
  };
}

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.banner} dir="rtl">
      <div className={styles.bannerSwiper}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          modules={[Navigation, Autoplay]}
          // grabCursor
          initialSlide={0}
          slidesPerView={1}
          // navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          className={styles.swiper}
        >
          {(bannerSlides as BannerSlide[]).map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.contentCntainer}>
                <article className={styles.contentCard} dir="rtl">
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                  <h2 className={styles.title}>{slide.title}</h2>
                  <p className={styles.body}>{slide.body}</p>
                  <p className={styles.lightDesc}>{slide.lightDesc}</p>
                  <button type="button" className={styles.categoryButton}>
                    {slide.categoryButton}
                  </button>
                </article>
              </div>
              <div className={styles.imageContainer}>
                <Image
                  src={slide.img}
                  alt="Banner Image"
                  width={1920}
                  height={1080}
                  priority
                  className={styles.image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.pagination}>
          <div className={styles.paginationInner}>
            {bannerSlides.map((slide, index) => (
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
      </div>
    </div>
  );
};

export default Banner;
