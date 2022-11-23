import InputText from "../../components/input-text/input-text";
import Select from "../../components/select/select";
import Textarea from "../../components/textarea/textarea";
import { useState } from "react";
import { op_locale } from "../../components/data.js";
import Code from "../../components/code/code";
import Header from "../../components/header/header";
const Website = () => {
  const [form, setForm] = useState({
    op_title: "",
    op_description: "",
    op_url: "",
    op_image_url: "",
    op_image_width: "",
    op_image_height: "",
    op_image_alt: "",
    op_locale: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `<meta property="og:type" content="website">\n${
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
    form.op_image_width.length > 0
      ? `<meta property="og:image:width" content="${form.op_image_width}">` +
        `\n`
      : ``
  }${
    form.op_image_height.length > 0
      ? `<meta property="og:image:height" content="${form.op_image_height}">` +
        `\n`
      : ``
  }${
    form.op_image_alt.length > 0
      ? `<meta property="og:image:alt" content="${form.op_image_alt}">` + `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-title">Open Graph</div>
          <div className="form">
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
              length={form.op_description}
              max="200"
              info="Recommend that you do not go beyond the limit of 200 characters."
            />
            <InputText
              label="URL"
              placeholder="Page URL"
              name={"op_url"}
              onChange={handleChange}
              info="The canonical URL of your object that will be used as its permanent ID in the graph, e.g., https://www.imdb.com/title/tt0117500/"
            />
            <InputText
              label="Image URL"
              placeholder="Image URL"
              name={"op_image_url"}
              onChange={handleChange}
              info="An image URL which should represent your object within the graph."
            />
            <InputText
              type="number"
              label="Width"
              placeholder=""
              name={"op_image_width"}
              onChange={handleChange}
              info="Use og:image:width and og:image:height Open Graph tags to specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it."
            />
            <InputText
              type="number"
              label="Height"
              placeholder=""
              name={"op_image_height"}
              onChange={handleChange}
              info="Use og:image:width and og:image:height Open Graph tags to specify the image dimensions to the crawler so that it can render the image immediately without having to asynchronously download and process it."
            />
            <Textarea
              label={"Image Alt Text"}
              name={"op_image_alt"}
              placeholder={""}
              onChange={handleChange}
              info="A description of what is in the image (not a caption)."
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default Website;
