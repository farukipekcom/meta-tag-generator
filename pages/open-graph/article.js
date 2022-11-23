import InputText from "../../components/input-text/input-text";
import Textarea from "../../components/textarea/textarea";
import { useState } from "react";
import Code from "../../components/code/code";
import Header from "../../components/header/header";
const Website = () => {
  const [form, setForm] = useState({
    op_title: "",
    op_description: "",
    op_url: "",
    op_image_url: "",
    op_image_alt: "",
    op_author: "",
    op_section: "",
    op_published_time: "",
    op_modified_time: "",
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
    form.op_image_alt.length > 0
      ? `<meta property="og:image:alt" content="${form.op_image_alt}">` + `\n`
      : ``
  }${
    form.op_author.length > 0
      ? `<meta property="article:author" content="${form.op_author}">` + `\n`
      : ``
  }${
    form.op_section.length > 0
      ? `<meta property="article:section" content="${form.op_section}">` + `\n`
      : ``
  }${
    form.op_published_time.length > 0
      ? `<meta property="article:published_time" content="${form.op_published_time}">` +
        `\n`
      : ``
  }${
    form.op_modified_time.length > 0
      ? `<meta property="article:modified_time" content="${form.op_modified_time}">` +
        `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-title">Open Graph - Article</div>
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
              length={form.op_description.length}
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
              label={"Image Alt Text"}
              name={"op_image_alt"}
              placeholder={""}
              onChange={handleChange}
              info="A description of what is in the image (not a caption)."
            />
            <InputText
              label="Author"
              placeholder="Writers of the article"
              name={"op_author"}
              onChange={handleChange}
            />
            <InputText
              label="Section"
              placeholder="E.g. Technology"
              name={"op_section"}
              onChange={handleChange}
            />
            <InputText
              type="datetime-local"
              label="Published Time"
              name={"op_published_time"}
              onChange={handleChange}
              info="When the article was first published."
            />
            <InputText
              type="datetime-local"
              label="Modified Time"
              name={"op_modified_time"}
              onChange={handleChange}
              info="When the article was last changed."
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default Website;
