import InputText from "../components/input-text/input-text";
import styles from "./index.module.css";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import InputCheckbox from "../components/input-checkbox/input-checkbox";
import { useState } from "react";
import { robots, charset, languages } from "./data.js";
import Highlight from "react-highlight";
export default function Home() {
  const [form, setForm] = useState({
    charset: "",
    title: "",
    description: "",
    robots: "",
    author: "",
    viewport: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };
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
      <div className={styles.left}>
        <div className={styles.logo}>Meta Tag Generator</div>
        <div className={styles.code}>
          <Highlight className="html">{data}</Highlight>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>Meta Tag Generator</h1>
        <div className={styles.section}>
          <InputText
            label="Page Title"
            placeholder="Title must be within 70 Characters"
            name={"title"}
            onChange={handleChange}
          />
          <Textarea
            label={"Site Description"}
            name={"description"}
            placeholder={"Description must be within 150 Characters"}
            onChange={handleChange}
          />
          <Select
            label={"Robots"}
            option={robots}
            name={"robots"}
            onChange={handleChange}
          />
          <Select
            label={"Charset"}
            option={charset}
            name={"charset"}
            onChange={handleChange}
          />
          <InputText
            label="Author"
            placeholder="Enter the name of the page's author"
            name={"author"}
            onChange={handleChange}
          />
          <InputCheckbox
            name={"viewport"}
            label={"Enable viewport if your site is responsive."}
            onChange={handleChangeCheckbox}
          />
        </div>
      </div>
    </div>
  );
}
