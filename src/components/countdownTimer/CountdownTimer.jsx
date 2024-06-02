/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = ({ startTime, setFinished }) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (startTime && timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [startTime, timeLeft]);

  if (timeLeft <= 0) {
    setFinished(true);
  }

  return (
    <div className={startTime ? "" : "hidden"}>
      <p className={styles.timeText}>Time left: {timeLeft}</p>
    </div>
  );
};

export default CountdownTimer;
