import Highlight from "react-highlight";
import styles from "./code.module.css";
const Code = ({ data }) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Code</div>
      <div className={styles.code}>
        <Highlight className="html">{data}</Highlight>
      </div>
    </div>
  );
};

export default Code;
