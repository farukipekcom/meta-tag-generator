import styles from "./summary-with-large-image.module.css";
import InputText from "../../components/input-text/input-text";
import Select from "../../components/select/select";
import Textarea from "../../components/textarea/textarea";
import { useState } from "react";
import { card_type } from "../../components/data.js";
import Code from "../../components/code/code";
import Header from "../../components/header/header";
const SummaryWithLargeImage = () => {
  const [form, setForm] = useState({
    twitter_title: "",
    twitter_site: "",
    twitter_description: "",
    twitter_image: "",
    twitter_image_alt_text: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `<meta name="twitter:card" content="summary_large_image" />\n${
    form.twitter_title.length > 0
      ? `<meta name="twitter:title" content="${form.twitter_title}">` + `\n`
      : ``
  }${
    form.twitter_description.length > 0
      ? `<meta name="twitter:description" content="${form.twitter_description}">` +
        `\n`
      : ``
  }${
    form.twitter_site.length > 0
      ? `<meta name="twitter:site" content="${form.twitter_site}">` + `\n`
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
            <InputText
              label="Title"
              placeholder="Title"
              name={"twitter_title"}
              onChange={handleChange}
              info={"A concise title for the related content."}
            />
            <Textarea
              label={"Description"}
              name={"twitter_description"}
              placeholder={"Description must be within 200 Characters"}
              onChange={handleChange}
              length={form.twitter_description.length}
              max={"200"}
              info={"Description of content (maximum 200 characters"}
            />
            <InputText
              label="Site (@username)"
              placeholder="Twitter username"
              name={"twitter_site"}
              onChange={handleChange}
              info={"The Twitter @username the card should be attributed to."}
            />
            <InputText
              label="Image URL"
              placeholder="https://"
              name={"twitter_image"}
              onChange={handleChange}
              info={
                "A URL to a unique image representing the content of the page. You should not use a generic image such as your website logo, author photo, or other image that spans multiple pages. Images for this Card support an aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096 pixels. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported."
              }
            />
            <Textarea
              label="Image Alt Text"
              placeholder="Title"
              name={"twitter_image_alt_text"}
              onChange={handleChange}
              length={form.twitter_image_alt_text.length}
              max={"420"}
              info={
                "A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters."
              }
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};
export default SummaryWithLargeImage;
