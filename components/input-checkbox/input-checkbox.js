import styles from "./input-checkbox.module.css";
const InputCheckbox = ({ label, name }) => {
  return (
    <>
      <label class={styles.container} htmlFor={name}>
        {label}
        <input
          type="checkbox"
          id={name}
          name={name}
          className={styles.checkbox}
        />
        <span class={styles.checkmark}></span>
      </label>
    </>
  );
};

export default InputCheckbox;
