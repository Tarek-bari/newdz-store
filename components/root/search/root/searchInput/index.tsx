import Image from "next/image";
import styles from "./index.module.scss";

const SearchField = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="ابحث هنا"
        className={styles.searchInput}
      />
      <Image
        src="./icons/search.svg"
        width={16}
        height={16}
        alt="Search"
        className={styles.searchIcon}
      />
    </div>
  );
};

export default SearchField;
