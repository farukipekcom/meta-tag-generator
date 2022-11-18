import InputText from "../components/input-text/input-text";
import styles from "./index.module.css";
import Select from "../components/select/select";
import Textarea from "../components/textare/textarea";
import InputCheckbox from "../components/input-checkbox/input-checkbox";
export default function Home() {
  const data = ["Lorem 1", "Lorem 2", "Lorem 3"];
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.logo}>Meta Tag Generator</div>
        <div className={styles.code}></div>
      </div>
      <div className={styles.right}>
        <InputText
          label="Page Title"
          placeholder="Title must be within 70 Characters"
          name={"title"}
        />
        <Select label={"Robots"} option={data} name={"robots"} />
        <Textarea
          label={"Site Description"}
          name={"description"}
          placeholder={"Description must be within 150 Characters"}
        />
        <InputCheckbox
          name={"viewport"}
          label={"Enable viewport if your site is responsive."}
        />
      </div>
    </div>
  );
}
