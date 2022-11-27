import InputText from "../../components/input-text/input-text";
import Select from "../../components/select/select";
import Textarea from "../../components/textarea/textarea";
import { useState } from "react";
import Code from "../../components/code/code";
import Header from "../../components/header/header";
import { op_currency } from "../../components/data";
const Profile = () => {
  const [form, setForm] = useState({
    op_title: "",
    op_plural_title: "",
    op_description: "",
    op_url: "",
    op_image_url: "",
    op_first_name: "",
    op_last_name: "",
    op_username: "",
  });
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const data = `<meta property="og:type" content="profile">\n${
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
    form.op_first_name.length > 0
      ? `<meta property="profile:first_name" content="${form.op_first_name}">` +
        `\n`
      : ``
  }${
    form.op_last_name.length > 0
      ? `<meta property="profile:last_name" content="${form.op_last_name}">` +
        `\n`
      : ``
  }${
    form.op_username.length > 0
      ? `<meta property="profile:username" content="${form.op_username}">` +
        `\n`
      : ``
  }`;
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <div className="main-title">Open Graph - Profile</div>
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
              label="First Name"
              placeholder="John"
              name={"op_first_name"}
              onChange={handleChange}
              info="A name normally given to an individual by a parent or self-chosen."
            />
            <InputText
              label="Last Name"
              placeholder="Doe"
              name={"op_last_name"}
              onChange={handleChange}
              info="A name inherited from a family or marriage and by which the individual is commonly known."
            />
            <InputText
              label="Username"
              placeholder="johndoe"
              name={"op_username"}
              onChange={handleChange}
              info="A short unique string to identify them."
            />
          </div>
        </div>
        <Code data={data} />
      </div>
    </>
  );
};

export default Profile;
