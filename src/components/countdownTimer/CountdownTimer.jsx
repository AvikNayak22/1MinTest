import { useContext, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { AppContext } from "../../context/AppContext";

const CountdownTimer = () => {
  const { startTime, setFinished } = useContext(AppContext);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (startTime && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTime, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setFinished(true);
    }
  }, [timeLeft, setFinished]);

  return (
    <Box display={startTime ? "block" : "none"} fontFamily="Karla">
      <Text margin="1rem" fontSize="2rem">
        Time left: {timeLeft}
      </Text>
    </Box>
  );
};

export default CountdownTimer;
