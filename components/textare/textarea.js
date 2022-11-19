import styles from "./textarea.module.css";
const Textarea = ({ label, placeholder, name, onChange }) => {
  return (
    <div className={styles.item}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
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
