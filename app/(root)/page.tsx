// import Banner from "@/components/banner/Banner";
import Banner from "@/components/carousel/rootCarousel/banner/banner";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={`${styles.wrapper}`}>
        <h1>after</h1>
      </div>
    </>
  );
};

export default Home;
