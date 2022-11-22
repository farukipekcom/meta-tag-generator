import styles from "./textarea.module.css";
import Label from "../label/label";
const Textarea = ({
  label,
  placeholder,
  name,
  onChange,
  length,
  max,
  info,
}) => {
  return (
    <div className={styles.item}>
      <Label name={name} label={label} max={max} length={length} info={info} />
      <textarea
        name={name}
        id={name}
        className={styles.textarea}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
