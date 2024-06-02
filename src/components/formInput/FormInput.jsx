/* eslint-disable react/prop-types */

import styles from "./FormInput.module.css";

const FormInput = ({ text, input, setInput, textImported, finished }) => {
  let textArray = text.split("");

  textArray = textArray.slice(1);

  const formattedText = textArray.map((char, index) => {
    let color = "";
    if (index < input.length) {
      color = char === input[index] ? styles.correct : styles.wrong;
    }

    return (
      <span key={`${char}_${index}`} className={color}>
        {char}
      </span>
    );
  });

  return (
    <div className={!textImported ? "hidden" : ""}>
      <div className={styles.container}>
        <div className={styles.textDisplay}>
          <h3>{formattedText}</h3>
        </div>
        <div className={styles.formField}>
          <form>
            <div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={finished ? true : false}
                placeholder="Type here..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormInput;
