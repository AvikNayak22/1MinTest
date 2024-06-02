import { useState } from "react";
import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";
import Results from "../components/results/Results";
import CountdownTimer from "../components/countdownTimer/CountdownTimer";

const HomePage = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [textImported, setTextImported] = useState(false);

  const [startTime, setStartTime] = useState(false);
  const [finished, setFinished] = useState(false);

  const getParagraph = (paragraph) => {
    setText(paragraph);
  };

  return (
    <div>
      <h1 className="app-title">1MinTest</h1>
      <div className={textImported ? "hidden" : ""}>
        <div className="welcome-title">
          <h2>Check your typing speed right now!</h2>
        </div>
      </div>
      <TextGenerator
        getParagraph={getParagraph}
        textImported={textImported}
        setTextImported={setTextImported}
      />

      <CountdownTimer
        startTime={startTime}
        setStartTime={setStartTime}
        setFinished={setFinished}
      />

      <FormInput
        text={text}
        input={input}
        setInput={setInput}
        textImported={textImported}
        finished={finished}
      />

      <Results text={text} input={input} finished={finished} />

      <div>
        <button
          onClick={() => setStartTime(true)}
          className={!textImported || finished ? "hidden" : ""}
        >
          Start typing
        </button>
      </div>

      <div className={finished ? "" : "hidden"}>
        <button
          onClick={() => window.location.reload(false)}
          className="btn-restart"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default HomePage;
