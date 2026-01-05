import ArabicNavBar from "@/components/navigation/rootNavigation";
import React from "react";
import styles from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main dir="rtl" className={styles.main}>
      <header className={styles.header}>
        <ArabicNavBar />
      </header>
      <main>{children}</main>
    </main>
  );
};

export default RootLayout;
