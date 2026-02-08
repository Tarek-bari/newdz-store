// import Banner from "@/components/banner/Banner";
import BannerSwiper from "@/components/carousel/bannerSwiper/bannerSwiper";
import styles from "./page.module.scss";

// const images = ["/images/iphone1.jpg", "/images/iphone2.jpg"];

const bannerSlides = [
  {
    img: "/images/daniel-romero-q-RQba-XCgU-unsplash.jpg",
    title: "iPhone 14 Pro",
    desc: "Pro. Beyond.",
    pagination: {
      category: "Shop the latest iPhone",
    },
  },
  {
    img: "/images/dennis-brendel-YLNMXzXk8zs-unsplash.jpg",
    title: "iPhone 14 Plus",
    desc: "Big and bigger.",
    pagination: {
      category: "Shop the latest iPhone",
    },
  },
  {
    img: "/images/img2.jpg",
    title: "iPhone 14",
    desc: "Wonderfull.",
    pagination: {
      category: "Shop the latest iPhone",
    },
  },

  {
    img: "/images/iphone2.jpg",
    title: "iPhone 14",
    desc: "Wonderfull.",
    pagination: {
      category: "Shop the latest iPhone",
    },
  },
];

const Home = () => {
  return (
    <>
      <div className={`${styles.wrapper}`}>
        <BannerSwiper slides={bannerSlides} />
      </div>
      <div className={`${styles.wrapper}`}>
        <h1>after</h1>
      </div>
    </>
  );
};

export default Home;
