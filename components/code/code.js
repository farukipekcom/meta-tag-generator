import Highlight from "react-highlight";
import styles from "./code.module.css";
import { useState } from "react";
const Code = ({ data }) => {
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  return (
    <div className={styles.main}>
      <div className={styles.title}>Code</div>
      <div className={`${styles.code} ${status && styles.copied}`}>
        <Highlight className="html">{data}</Highlight>
        <button
          className={styles.copy}
          onClick={() => {
            navigator.clipboard.writeText(data);
            setMessage(1);
            setStatus(1);
            setTimeout(() => {
              setMessage("");
            }, 2000);
          }}
        >
          Copy
        </button>
        {message && <div className={styles.message}>Copied</div>}
      </div>
    </div>
  );
};

export default Code;
