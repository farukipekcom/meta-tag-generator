import Highlight from "react-highlight";
import styles from "./code.module.css";
const Code = ({ form }) => {
  const data = `${
    form.title.length > 0 ? `<title>${form.title}</title>` + `\n` : ``
  }${
    form.description.length > 0
      ? `<meta name="description" content="${form.description}">` + `\n`
      : ``
  }${
    (form.robots.length > 0) & (form.robots !== "-- Select --")
      ? `<meta name="robots" content="${form.robots}">` + `\n`
      : ``
  }${form.charset.length > 0 ? `<meta charset="${form.charset}">` + `\n` : ``}${
    form.author.length > 0
      ? `<meta name="author" content="${form.author}">` + `\n`
      : ``
  }${
    form.viewport === true
      ? `<meta name="viewport" content="width=device-width, initial-scale=1">` +
        `\n`
      : ``
  }`;
  return (
    <div className={styles.main}>
      <div className={styles.title}>Code</div>
      <div className={styles.code}>
        <Highlight className="html">{data}</Highlight>
      </div>
    </div>
  );
};

export default Code;
