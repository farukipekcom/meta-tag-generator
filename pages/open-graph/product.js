import InputText from "../../components/input-text/input-text";
import Select from "../../components/select/select";
import Textarea from "../../components/textarea/textarea";
import { useState } from "react";
import Code from "../../components/code/code";
import Header from "../../components/header/header";
import { op_currency } from "../../components/data";
const Product = () => {
  const [form, setForm] = useState({
    op_title: "",
    op_plural_title: "",
    op_description: "",
    op_url: "",
    op_image_url: "",
    op_price: "",
    op_currency: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `<meta property="og:type" content="product">\n${
    form.op_title.length > 0
      ? `<meta property="og:title" content="${form.op_title}">` + `\n`
      : ``
  }${
    form.op_plural_title.length > 0
      ? `<meta property="product:plural_title" content="${form.op_plural_title}">` +
        `\n`
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
    form.op_price.length > 0
      ? `<meta property="product:price.amount" content="${form.op_price}">` +
        `\n`
      : ``
  }${
    (form.op_currency.length > 0) & (form.charset !== "-- Select --")
      ? `<meta property="product:price.currency" content="${form.op_currency}">` +
        `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-title">Open Graph - Product</div>
          <div className="form">
            <InputText
              label="Title"
              placeholder="Title"
              name={"op_title"}
              onChange={handleChange}
            />
            <InputText
              label="Plural Title"
              placeholder="Plural Title"
              name={"op_plural_title"}
              onChange={handleChange}
              info="Title of the product when a quantity more than 1 is purchased."
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
              type="number"
              label="Price"
              placeholder="Price"
              name={"op_price"}
              onChange={handleChange}
            />
            <Select
              label={"Currency"}
              option={op_currency}
              name={"op_currency"}
              onChange={handleChange}
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default Product;
