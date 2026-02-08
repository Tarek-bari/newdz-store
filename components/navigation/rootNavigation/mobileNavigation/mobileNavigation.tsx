"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./mobileNavigation.module.scss";
import React from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";
import NavLinks from "../navLinks/navLinks";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Burger Icon */}
      <Image
        src="./icons/burger.svg"
        width={40}
        height={40}
        alt="Open menu"
        className={styles.mobileNavIcon}
        onClick={openMenu}
      />

      {/* Overlay (always mounted for animation) */}
      <div
        className={`${styles.overlay} ${
          isOpen ? styles.overlayOpen : styles.overlayClosed
        }`}
        onClick={closeMenu}
      />

      {/* Slide-in Menu */}
      <nav
        className={`${styles.menuContainer} ${
          isOpen ? styles.openMenu : styles.closedMenu
        }`}
        aria-hidden={!isOpen}
      >
        <Image
          src="./icons/close.svg"
          width={24}
          height={24}
          alt="Close menu"
          className={styles.closeIcon}
          onClick={closeMenu}
        />

        <Link href={routes.HOME} onClick={closeMenu}>
          <Image src="./icons/logo.svg" width={96} height={32} alt="Logo" />
        </Link>

        <NavLinks isMobileNav onLinkClick={closeMenu} />
      </nav>
    </>
  );
};

export default MobileNavigation;
