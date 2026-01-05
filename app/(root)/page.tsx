// import Banner from "@/components/banner/Banner";
import BannerSwiper from "@/components/carousel/bannerSwiper/bannerSwiper";
import styles from "./page.module.scss";

const images = ["/images/iphone1.jpg", "/images/iphone2.jpg"];

const Home = () => {
  return (
    <main>
      <BannerSwiper images={images} />
      <section className={styles.wrapper}>
        <h1>after</h1>
      </section>
    </main>
  );
};

export default Home;
