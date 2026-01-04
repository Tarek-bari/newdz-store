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

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <React.Fragment>
      <Image
        src="./icons/burger.svg"
        width={40}
        height={40}
        alt="Burger"
        className={styles.mobileNavIcon}
        onClick={openMenu}
      />

      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

      <div
        className={`${styles.menuContainer} ${
          isOpen ? styles.openMenu : styles.closedMenu
        }`}
      >
        <Image
          src="./icons/close.svg"
          width={24}
          height={24}
          alt="Close"
          className={styles.closeIcon}
          onClick={closeMenu}
        />
        <Link href={routes.HOME}>
          <Image
            src="./icons/logo.svg"
            width={96}
            height={32}
            alt="Logo"
            onClick={closeMenu}
          />
        </Link>
        <div>
          <NavLinks isMobileNav onLinkClick={closeMenu} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileNavigation;
