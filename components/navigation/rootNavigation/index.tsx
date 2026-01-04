import styles from "./index.module.scss";
import Image from "next/image";
import NavLinks from "./navLinks/navLinks";
import MobileNavigation from "./mobileNavigation/mobileNavigation";
import SearchField from "@/components/search/root/searchInput";

const ArabicNavBar = () => {
  return (
    <nav className={styles.main}>
      <div>
        <Image src="./icons/logo.svg" width={96} height={32} alt="Logo" />
      </div>
      <SearchField />
      <div className={styles.links}>
        <NavLinks />
      </div>
      <div className={styles.basket}>
        <Image src="./icons/basket.svg" width={32} height={32} alt="User" />
      </div>
      <MobileNavigation />
    </nav>
  );
};

export default ArabicNavBar;
