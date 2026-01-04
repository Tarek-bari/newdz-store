"use client";
import { links } from "@/constants";
import styles from "./navLinks.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLinks = ({
  isMobileNav = false,
  onLinkClick,
}: {
  isMobileNav?: boolean;
  onLinkClick?: () => void;
}) => {
  const pathName = usePathname();

  return (
    <div
      className={isMobileNav ? styles.mobileNavLinks : styles.desktopNavLinks}
    >
      {links.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        return (
          <Link
            key={item.route}
            href={item.route}
            className={isActive ? styles.activeItem : styles.navItem}
            onClick={onLinkClick}
          >
            <p>{item.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
