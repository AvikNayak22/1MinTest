/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";
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
    <div className={startTime ? "" : "hidden"}>
      <p className={styles.timeText}>Time left: {timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
