import { useContext } from "react";
import { Box, Text, Input, FormControl } from "@chakra-ui/react";
import { AppContext } from "../../context/AppContext";

const FormInput = () => {
  const { text, input, setInput, textImported, finished, startTime } =
    useContext(AppContext);
  let textArray = text.split("");
  textArray = textArray.slice(1);

  const formattedText = textArray.map((char, index) => {
    let color = "";
    if (index < input.length) {
      color = char === input[index] ? "green.500" : "red.500";
    }

    return (
      <Text as="span" key={`${char}_${index}`} color={color}>
        {char}
      </Text>
    );
  });

  return (
    <Box
      display={!textImported ? "none" : "block"}
      maxWidth="50rem"
      m="1rem auto"
      p="1rem"
      backgroundColor="gray.100"
      border="2px solid"
      borderColor="gray.500"
      borderRadius="0.5rem"
      fontFamily="Karla"
    >
      <Box m="1rem auto" maxWidth="90%" wordWrap="break-word" textAlign="left">
        <Text as="h3" color="black.500" fontSize="1.1rem">
          {formattedText}
        </Text>
      </Box>
      <FormControl m="1rem auto">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          isDisabled={finished || !startTime}
          placeholder="Type here..."
          p="1rem"
          width="70%"
          bg="white"
          border="2px solid"
          borderColor="gray.500"
          borderRadius="0.25rem"
          fontSize="1.1rem"
          _hover={{ borderColor: "black.600" }}
          _focus={{ borderColor: "black.400" }}
          m="1rem"
        />
      </FormControl>
    </Box>
  );
};

export default FormInput;
