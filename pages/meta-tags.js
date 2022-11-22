import styles from "./meta-tags.module.css";
import InputText from "../components/input-text/input-text";
import Select from "../components/select/select";
import Textarea from "../components/textarea/textarea";
import InputCheckbox from "../components/input-checkbox/input-checkbox";
import { robots, charset } from "../components/data.js";
import { useState } from "react";
import Code from "../components/code/code";
import Header from "../components/header/header";
const MetaTags = () => {
  const [titleLength, setTitleLength] = useState();
  const [form, setForm] = useState({
    charset: "",
    title: "",
    description: "",
    robots: "",
    author: "",
    viewport: "",
    revisit: "",
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
  }${
    form.revisit.length > 0
      ? `<meta name="revisit-after" content="${form.revisit} days" />` + `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.title}>Meta Tags</div>
          <div className={styles.form}>
            <InputText
              label="Page Title"
              placeholder="Title must be within 60 Characters"
              name={"title"}
              onChange={handleChange}
              length={form.title.length}
              max={"60"}
              info={
                "The title of your web-page. This is the first line that will be displayed in a search result."
              }
            />
            <Textarea
              label={"Site Description"}
              name={"description"}
              placeholder={"Description must be within 160 Characters"}
              onChange={handleChange}
              length={form.description.length}
              max={"160"}
              info={
                "A meta description is an HTML tag that summarizes the webpage’s content. It’s the snippet of text, often around 160 characters long, that appears under your page title in search engine result pages. "
              }
            />
            <Select
              label={"Robots"}
              option={robots}
              name={"robots"}
              onChange={handleChange}
              info={
                "Meta robots - is the name for the HTML tag responsible for providing information to search engine crawlers about whether a page should be indexed and what content can be displayed in search results."
              }
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
            -----
            <br />
            <InputText
              label="Revisit"
              placeholder="Search engines should revisit this page after"
              name={"revisit"}
              onChange={handleChange}
              type={"number"}
              info={
                "The Revisit tag would tell the spider of a search engine to come back to your website and index it again. "
              }
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default MetaTags;
