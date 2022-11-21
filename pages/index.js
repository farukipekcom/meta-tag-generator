import InputText from "../components/input-text/input-text";
import styles from "./index.module.css";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import InputCheckbox from "../components/input-checkbox/input-checkbox";
import { useState } from "react";
import {
  robots,
  charset,
  card_type,
  op_type,
  op_locale,
} from "../components/data.js";
import Header from "../components/header/header";
import MetaTags from "./meta-tags";
export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <MetaTags />
      </div>
      {/* <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.logo}>Meta Tag Generator</div>
          <div className={styles.code}>
            <Highlight className="html">{data}</Highlight>
            <button
              className={styles.copy}
              onClick={() => {
                navigator.clipboard.writeText(data);
              }}
            >
              Copy
            </button>
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
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Twitter Card</h2>
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
          <div className={styles.section}>
            <h2 className={styles.subtitle}>Open Graph</h2>
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
      </div> */}
    </>
  );
}
