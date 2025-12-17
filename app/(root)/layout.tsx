import ArabicNavBar from "@/components/navigation/rootNavigation";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="" dir="rtl" style={{ background: "red" }}>
      <section>
        <ArabicNavBar />
      </section>
      <section>{children}</section>
    </main>
  );
};

export default RootLayout;
