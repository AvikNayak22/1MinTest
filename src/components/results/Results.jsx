/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./Results.module.css";
import { AppContext } from "../../context/AppContext";

const Results = () => {
  const { text, input, finished } = useContext(AppContext);
  const textArray = text.split(" ").slice(1);
  const inputArray = input.split(" ");

  const [totalWords, setTotalWords] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);

  const accuracy = Math.round((correctWords / totalWords) * 100);

  useEffect(() => {
    setTotalWords(inputArray.length);
    let correctWordsCounter = 0;

    inputArray.forEach((element, index) => {
      if (inputArray[index] === textArray[index]) {
        correctWordsCounter += 1;
      }
    });
    setCorrectWords(correctWordsCounter);
  }, [finished]);

  return (
    <div className={finished ? "" : "hidden"}>
      <div className={styles.container}>
        <h2>Total: {totalWords}</h2>
        <h2>Correct: {correctWords}</h2>
        <h2>Accuracy: {accuracy} %</h2>
      </div>
    </div>
  );
};

export default Results;
