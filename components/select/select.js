import styles from "./select.module.scss";
import Label from "../label/label";
const Select = ({ label, option, name, onChange, length, max, info }) => {
  return (
    <div className={styles.item}>
      <Label name={name} label={label} max={max} length={length} info={info} />
      <select
        name={name}
        id={name}
        className={styles.select}
        onChange={onChange}
      >
        {option.map((item) => {
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5421 0L6.98282 5.19016L1.38969 0.0330012L0 1.38829L6.94924 8L14 1.42129L12.5421 0Z"
          fill="#D1D5DB"
        />
      </svg>
    </div>
  );
};

export default Select;
