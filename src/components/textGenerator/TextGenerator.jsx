import { useState } from "react";
import styles from "./TextGenerator.module.css";
import axios from "axios";

const EndpointAPI = "https://api.quotable.io/random";

const TextGenerator = () => {
  const [displayText, setDisplayText] = useState("");

  const getText = async () => {
    let paragraph = "";

    for (let i = 0; i < 6; i++) {
      const response = await axios.get(EndpointAPI);
      let new_paragraph = response.data.content;
      paragraph = paragraph + " " + new_paragraph;
      setDisplayText(paragraph);
    }
  };

  return (
    <div>
      <div>
        <article>
          <p>{displayText}</p>
        </article>
      </div>

      <button onClick={getText} className={styles.btn}>
        Generate words
      </button>
    </div>
  );
};

export default TextGenerator;