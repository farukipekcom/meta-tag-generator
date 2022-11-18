import styles from "./input-text.module.css";
const InputText = ({ type = "text", placeholder, title }) => {
  return (
    <>
      <label htmlFor={title} className={styles.label}>
        Site Title
      </label>
      <input
        type={type}
        name={title}
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
};

export default InputText;
