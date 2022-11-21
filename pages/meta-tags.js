import styles from "./meta-tags.module.css";
import InputText from "../components/input-text/input-text";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import InputCheckbox from "../components/input-checkbox/input-checkbox";
import { robots, charset } from "../components/data.js";
import { useState } from "react";
import Code from "../components/code/code";
const MetaTags = () => {
  const [form, setForm] = useState({
    charset: "",
    title: "",
    description: "",
    robots: "",
    author: "",
    viewport: "",
    card_type: "",
    twitter_title: "",
    twitter_site: "",
    twitter_description: "",
    twitter_image: "",
    twitter_image_alt_text: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleChangeCheckbox = (event) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>Meta Tags</div>
        <div className={styles.form}>
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
      <Code form={form} />
    </>
  );
};

export default MetaTags;
