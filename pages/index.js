import InputText from "../components/input-text/input-text";
import styles from "./index.module.css";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.logo}>Meta Tag Generator</div>
        <div className={styles.code}></div>
      </div>
      <div className={styles.right}>
        <InputText
          placeholder="Title must be within 70 Characters"
          name="title"
        />
      </div>
    </div>
  );
}
