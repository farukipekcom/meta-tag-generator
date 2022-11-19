import styles from "./select.module.css";
const Select = ({ label, option, name }) => {
  return (
    <div className={styles.item}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select name={name} id={name} className={styles.select}>
        {option.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
