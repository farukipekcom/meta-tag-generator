import styles from "./label.module.css";
const Label = ({ name, label, max, length, info = "" }) => {
  return (
    <div className={styles.heading}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {info.length > 0 ? (
        <div className={styles.info}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <path d="M8 0C3.57333 0 0 3.57333 0 8C0 12.4267 3.57333 16 8 16C12.4267 16 16 12.4267 16 8C16 3.57333 12.4267 0 8 0V0ZM9.0134 11.68C8.69346 11.8045 8.42673 11.9111 8.23114 11.9645C8.03558 12.0178 7.87562 12.0355 7.73336 12.0355C7.44889 12.0355 7.23559 11.9645 7.09336 11.8044C6.95113 11.6621 6.88007 11.4666 6.88007 11.2533C6.88007 11.1644 6.88007 11.0933 6.8978 11.0044C6.91553 10.9155 6.93339 10.8089 6.96886 10.6666L7.53781 8.39105C7.5734 8.26655 7.59113 8.12444 7.62673 7.9822C7.66232 7.83996 7.66232 7.71558 7.66232 7.6088C7.66232 7.41324 7.62673 7.27099 7.55567 7.21769C7.48461 7.14663 7.36011 7.11104 7.14681 7.11104C7.07575 7.11104 6.96898 7.12877 6.82687 7.14663C6.70237 7.16436 6.59573 7.19996 6.52467 7.21769L6.61358 6.87988C6.89806 6.75537 7.14695 6.66658 7.36025 6.59541C7.57354 6.54208 7.75136 6.50649 7.89361 6.50649C8.17809 6.50649 8.39139 6.57755 8.53361 6.71979C8.65812 6.86203 8.72918 7.03972 8.72918 7.28874C8.72918 7.3598 8.72918 7.44871 8.71144 7.55536C8.69371 7.662 8.67585 7.76865 8.64039 7.89316L8.07105 10.1688C8.03546 10.3111 8 10.4533 7.98214 10.5777C7.96441 10.7199 7.94655 10.8266 7.94655 10.9155C7.94655 11.1111 7.99987 11.2533 8.08879 11.3422C8.1777 11.4133 8.31994 11.4489 8.53323 11.4489C8.60429 11.4489 8.6932 11.4489 8.8177 11.4133C8.94221 11.3777 9.04885 11.3777 9.10218 11.3422L9.0134 11.68ZM9.28001 5.03111C9.15551 5.19108 8.97781 5.26226 8.78223 5.26226C8.60441 5.26226 8.44442 5.1912 8.3022 5.04896C8.1777 4.90673 8.10664 4.74676 8.10664 4.55119C8.10664 4.35563 8.1777 4.17779 8.3022 4.0357C8.42671 3.89346 8.58668 3.8224 8.78223 3.8224C8.97779 3.8224 9.15563 3.89346 9.28001 4.0357C9.40452 4.17793 9.47557 4.3379 9.47557 4.51573C9.47557 4.69331 9.42225 4.87112 9.28001 5.03109V5.03111Z" />
          </svg>
          <div className={styles.goster}>{info}</div>
        </div>
      ) : (
        ""
      )}
      <span
        className={`${styles.limit} ${
          (max / length < 1.15) & (max / length >= 1) && styles.orange
        } ${max / length < 1 && styles.red} `}
      >
        {max && length + " / " + max}
      </span>
    </div>
  );
};

export default Label;
