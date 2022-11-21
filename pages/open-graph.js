import styles from "./open-graph.module.css";
import InputText from "../components/input-text/input-text";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import { useState } from "react";
import { op_type, op_locale } from "../components/data.js";
import Code from "../components/code/code";
import Header from "../components/header/header";
const OpenGraph = () => {
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
    op_type: "",
    op_title: "",
    op_description: "",
    op_url: "",
    op_image_url: "",
    op_locale: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `${
    (form.op_type.length > 0) & (form.op_type !== "-- Select --")
      ? `<meta property="og:type" content="${form.op_type}">` + `\n`
      : ``
  }${
    form.op_title.length > 0
      ? `<meta property="og:title" content="${form.op_title}">` + `\n`
      : ``
  }${
    form.op_description.length > 0
      ? `<meta property="og:description" content="${form.op_description}">` +
        `\n`
      : ``
  }${
    form.op_url.length > 0
      ? `<meta property="og:url" content="${form.op_url}">` + `\n`
      : ``
  }${
    form.op_image_url.length > 0
      ? `<meta property="og:image" content="${form.op_image_url}">` + `\n`
      : ``
  }${
    (form.op_locale.length > 0) & (form.op_locale !== "-- Select --")
      ? `<meta property="og:locale" content="${form.op_locale}" />` + `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.title}>Open Graph</div>
          <div className={styles.form}>
            <Select
              label={"Open Graph Type"}
              option={op_type}
              name={"op_type"}
              onChange={handleChange}
            />
            <InputText
              label="Title"
              placeholder="Title"
              name={"op_title"}
              onChange={handleChange}
            />
            <Textarea
              label={"Description"}
              name={"op_description"}
              placeholder={"Description must be within 200 Characters"}
              onChange={handleChange}
            />
            <InputText
              label="Page URL"
              placeholder="Page URL"
              name={"op_url"}
              onChange={handleChange}
            />
            <InputText
              label="Image URL"
              placeholder="Image URL"
              name={"op_image_url"}
              onChange={handleChange}
            />
            <Select
              label={"Locale"}
              option={op_locale}
              name={"op_locale"}
              onChange={handleChange}
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default OpenGraph;
