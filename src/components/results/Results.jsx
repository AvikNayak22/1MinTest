import { useContext, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
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
    <Box
      className={finished ? "" : "hidden"}
      margin="2rem auto 0"
      color="black.500"
      fontFamily="Karla"
      padding="1rem"
      maxWidth="300px"
      fontSize="1.3rem"
    >
      <Text as="h2" size="md">
        Total: {totalWords}
      </Text>
      <Text as="h2" size="md">
        Correct: {correctWords}
      </Text>
      <Text as="h2" size="md">
        Accuracy: {accuracy} %
      </Text>
    </Box>
  );
};

export default Results;
