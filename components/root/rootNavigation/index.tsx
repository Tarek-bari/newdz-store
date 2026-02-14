import styles from "./index.module.scss";
import Image from "next/image";
import NavLinks from "./navLinks/navLinks";
import MobileNavigation from "./mobileNavigation/mobileNavigation";
import SearchField from "@/components/root/search/root/searchInput";
import Link from "next/link";

const ArabicNavBar = () => {
  return (
    <nav className={styles.wrapper}>
      <div>
        <Link href="/">
          <Image src="./icons/logo.svg" width={96} height={32} alt="Logo" />
        </Link>
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
