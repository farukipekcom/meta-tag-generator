import styles from "./input-checkbox.module.scss";
const InputCheckbox = ({ label, name, onChange }) => {
  return (
    <>
      <label class={styles.container} htmlFor={name}>
        {label}
        <input
          type="checkbox"
          id={name}
          name={name}
          className={styles.checkbox}
          onChange={onChange}
        />
        <span class={styles.checkmark}></span>
      </label>
    </>
  );
};

export default InputCheckbox;
