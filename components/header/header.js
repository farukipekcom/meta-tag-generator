import Link from "next/link";
import styles from "./header.module.scss";
import { useState } from "react";
import Menu from "../icons/menu";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [opengraphdropdown, setOpengraphdropdown] = useState(false);
  const [twitterDropdown, setTwitterDropdown] = useState(false);
  const onClickOpenGraph = () => {
    setOpengraphdropdown(!opengraphdropdown);
  };
  const onClickTwitter = () => {
    setTwitterDropdown(!twitterDropdown);
  };
  const onClickMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.logo}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="12" fill="white" />
          <rect x="10" y="10" width="16" height="16" rx="6" fill="#111825" />
        </svg>
        <span className={styles.title}>Meta Tags Generator</span>
      </Link>
      <div className={styles.icon} onClick={onClickMenu}>
        <Menu />
      </div>
      <div
        className={`${styles.menu} ${
          mobileMenu === true ? styles.mobileMenu : ""
        }`}
      >
        <Link href="/meta-tags" className={styles.item}>
          Meta Tags
        </Link>
        <div className={`${styles.item}`} onClick={onClickOpenGraph}>
          Open Graph
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5421 0L6.98282 5.19016L1.38969 0.0330012L0 1.38829L6.94924 8L14 1.42129L12.5421 0Z"
              fill="#D1D5DB"
            />
          </svg>
        </div>
        {opengraphdropdown === true ? (
          <div className={styles.dropdown}>
            <Link href="/open-graph/article" className={styles.item}>
              Article
            </Link>
            <Link href="/open-graph/profile" className={styles.item}>
              Profile
            </Link>
            <Link href="/open-graph/product" className={styles.item}>
              Product
            </Link>
            <Link href="/open-graph/website" className={styles.item}>
              Website
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className={`${styles.item}`} onClick={onClickTwitter}>
          Twitter Card
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svg}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5421 0L6.98282 5.19016L1.38969 0.0330012L0 1.38829L6.94924 8L14 1.42129L12.5421 0Z"
              fill="#D1D5DB"
            />
          </svg>
        </div>
        {twitterDropdown === true ? (
          <div className={styles.dropdown}>
            <Link href="/twitter-card/app" className={styles.item}>
              App
            </Link>
            <Link href="/twitter-card/player" className={styles.item}>
              Player
            </Link>
            <Link href="/twitter-card/summary" className={styles.item}>
              Summary
            </Link>
            <Link
              href="/twitter-card/summary-with-large-image"
              className={styles.item}
            >
              Summary with Large Image
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
