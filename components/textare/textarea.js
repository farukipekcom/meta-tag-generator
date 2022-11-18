import styles from "./textarea.module.css";
const Textarea = ({ label, placeholder, name }) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        className={styles.textarea}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
