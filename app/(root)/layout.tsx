import ArabicNavBar from "@/components/root/navigation";
import React from "react";
import styles from "./layout.module.scss";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div dir="rtl" className={styles.rootLayout}>
      <header className={styles.header}>
        <ArabicNavBar />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default RootLayout;
