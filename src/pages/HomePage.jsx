import { useState } from "react";
import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";
import Results from "../components/results/Results";

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

      <div className="welcome-title">
        <h2>Check your typing speed right now!</h2>
      </div>
      <TextGenerator
        getParagraph={getParagraph}
        textImported={textImported}
        setTextImported={setTextImported}
      />

      <FormInput
        text={text}
        input={input}
        setInput={setInput}
        textImported={textImported}
      />

      {/* <Results text={text} input={input} /> */}

      <div>
        <button>Start typing</button>
      </div>

      <div className="btn-restart hidden">
        <button>Restart</button>
      </div>
    </div>
  );
};

export default HomePage;
