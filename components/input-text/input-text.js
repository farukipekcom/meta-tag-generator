import styles from "./input-text.module.css";
import Label from "../label/label";
const InputText = ({
  label,
  type = "text",
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
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
