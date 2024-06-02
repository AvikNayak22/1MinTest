import { useContext, useState } from "react";
import styles from "./TextGenerator.module.css";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const EndpointAPI = "https://api.quotable.io/random";

const TextGenerator = () => {
  const [displayText, setDisplayText] = useState("");
  const { getParagraph, textImported, setTextImported } =
    useContext(AppContext);

  const getText = async () => {
    let paragraph = "";

    for (let i = 0; i < 6; i++) {
      const response = await axios.get(EndpointAPI);
      let new_paragraph = response.data.content;
      paragraph = paragraph + " " + new_paragraph;
      setDisplayText(paragraph);
    }

    return paragraph;
  };

  const sendDataUp = async () => {
    const value = await getText();
    getParagraph(value);
    setTextImported(true);
  };

  return (
    <div className={textImported ? "hidden" : ""}>
      <div>
        <article>
          <p>{displayText}</p>
        </article>
      </div>

      <button onClick={sendDataUp} className={styles.btn}>
        Generate words
      </button>
    </div>
  );
};

export default TextGenerator;
