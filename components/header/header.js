import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const onClick = () => {
    setMenu(!menu);
  };
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
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
      </div>
      <div className={styles.menu}>
        <Link href="/meta-tags" className={styles.item}>
          Meta Tags
        </Link>
        <div className={`${styles.item}`} onClick={onClick}>
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
        {menu === true ? (
          <div className={styles.dropdown}>
            <Link href="/open-graph/article" className={styles.item}>
              Article
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
        <div className={`${styles.item}`} onClick={onClick}>
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
        {menu === true ? (
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
