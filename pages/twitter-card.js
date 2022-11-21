import styles from "./twitter-card.module.css";
import InputText from "../components/input-text/input-text";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import { useState } from "react";
import { card_type } from "../components/data.js";
import Code from "../components/code/code";
import Header from "../components/header/header";
const TwitterCard = () => {
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
  const data = `${
    (form.card_type.length > 0) & (form.card_type !== "-- Select --")
      ? `<meta name="twitter:card" content="${form.card_type}">` + `\n`
      : ``
  }${
    form.twitter_title.length > 0
      ? `<meta name="twitter:title" content="${form.twitter_title}">` + `\n`
      : ``
  }${
    form.twitter_site.length > 0
      ? `<meta name="twitter:site" content="${form.twitter_site}">` + `\n`
      : ``
  }${
    form.twitter_description.length > 0
      ? `<meta name="twitter:description" content="${form.twitter_description}">` +
        `\n`
      : ``
  }${
    form.twitter_image.length > 0
      ? `<meta name="twitter:image" content="${form.twitter_image}">` + `\n`
      : ``
  }${
    form.twitter_image_alt_text.length > 0
      ? `<meta name="twitter:image:alt" content="${form.twitter_image_alt_text}">` +
        `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.title}>Twitter Card</div>
          <div className={styles.form}>
            <Select
              label={"Twitter Card Type"}
              option={card_type}
              name={"card_type"}
              onChange={handleChange}
            />
            <InputText
              label="Title"
              placeholder="Title"
              name={"twitter_title"}
              onChange={handleChange}
            />
            <InputText
              label="Site (username)"
              placeholder="The Twitter @username the card should be attributed to."
              name={"twitter_site"}
              onChange={handleChange}
            />
            <Textarea
              label={"Description"}
              name={"twitter_description"}
              placeholder={"Description must be within 200 Characters"}
              onChange={handleChange}
            />
            <InputText
              label="Image URL"
              placeholder="https://"
              name={"twitter_image"}
              onChange={handleChange}
            />
            <InputText
              label="Image Alt Text"
              placeholder="Title"
              name={"twitter_image_alt_text"}
              onChange={handleChange}
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default TwitterCard;
