// import Banner from "@/components/banner/Banner";
import styles from "./page.module.scss";
import BannerSwiper from "@/components/carousel/bannerSwiper/bannerSwiper";

const images = ["/images/iphone1.jpg", "/images/iphone2.jpg"];

const Home = () => {
  return (
    <main className={styles.main}>
      {/* <section className={styles.bannerContainer}> */}
      <BannerSwiper images={images} />
      {/* </section> */}
      <section>
        <h1>after</h1>
      </section>
    </main>
  );
};

export default Home;
