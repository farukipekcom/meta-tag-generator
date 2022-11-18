import styles from "./input-text.module.css";
const InputText = ({ label, type = "text", placeholder, name }) => {
  return (
    <>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
};

export default InputText;
