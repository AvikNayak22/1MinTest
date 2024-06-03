import { useContext } from "react";
import { Box, Heading, Button, Stack } from "@chakra-ui/react";
import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";
import Results from "../components/results/Results";
import CountdownTimer from "../components/countdownTimer/CountdownTimer";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { textImported, startTime, setStartTime, finished } =
    useContext(AppContext);

  return (
    <Box textAlign="center" p={5}>
      <Heading as="h1" size="2xl" mb={5} color="black" fontFamily="Karla">
        1MinTest
      </Heading>

      {!textImported && (
        <Box mb={5}>
          <Heading as="h2" size="md" fontFamily="Karla">
            Check your typing speed right now!
          </Heading>
        </Box>
      )}

      <Stack spacing={4}>
        <TextGenerator />

        <CountdownTimer />

        <FormInput />

        <Results />
      </Stack>

      <Box mt={5}>
        <Button
          onClick={() => setStartTime(true)}
          color="white"
          backgroundColor="black"
          _focus={{ scale: 0.98, backgroundColor: "black.500" }}
          _hover={{ backgroundColor: "black.500" }}
          hidden={!textImported || startTime}
        >
          Start typing
        </Button>
      </Box>

      {finished && (
        <Box mt={5}>
          <Button
            onClick={() => window.location.reload(false)}
            color="white"
            backgroundColor="black"
            _focus={{ scale: 0.98, backgroundColor: "black.500" }}
            _hover={{ backgroundColor: "black.500" }}
          >
            Restart
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
