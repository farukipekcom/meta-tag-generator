import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
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
        <a href="" className={styles.item}>
          Open Graph
        </a>
        <Link href="/twitter-card" className={styles.item}>
          Twitter Card
        </Link>
      </div>
    </div>
  );
};

export default Header;
