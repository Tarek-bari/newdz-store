"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./bannerSwiper.module.scss";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const BannerSwiper = ({ images }: { images: string[] }) => {
  return (
    // <div className={styles.bannerSwiper}>
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      // autoplay={{ delay: 1000 }}
      loop={true}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      {images.map((src) => {
        return (
          <SwiperSlide key={src} className={styles.swiperSlide}>
            <div className={styles.textSlide}>
              <h1>Picture Desc</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                consequatur perferendis non voluptate omnis harum?
              </p>
            </div>
            <Image
              src={src}
              alt="Banner Image"
              fill
              className={styles.imageSlide}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
    // </div>
  );
};

export default BannerSwiper;
