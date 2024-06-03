import { Box, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
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
    <Box display={textImported ? "none" : "block"} fontFamily="Karla">
      <Box>
        <Box
          as="article"
          margin="2rem auto 0"
          backgroundColor="gray.100"
          border="2px solid"
          borderColor="gray.500"
          borderRadius="0.25rem"
          padding="1rem"
          maxW="80%"
        >
          <Box as="p" color="black.500" textAlign="left" fontSize="1.1rem">
            {displayText}
          </Box>
        </Box>
      </Box>

      <Button
        onClick={sendDataUp}
        margin="0.7rem"
        color="white"
        backgroundColor="black"
        _focus={{ scale: 0.98, backgroundColor: "black.500" }}
        _hover={{ backgroundColor: "black.500" }}
      >
        Generate words
      </Button>
    </Box>
  );
};

export default TextGenerator;
