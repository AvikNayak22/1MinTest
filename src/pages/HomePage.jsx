import { useContext } from "react";
import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";
import Results from "../components/results/Results";
import CountdownTimer from "../components/countdownTimer/CountdownTimer";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const { textImported, setStartTime, finished } = useContext(AppContext);

  return (
    <div>
      <h1 className="app-title">1MinTest</h1>
      <div className={textImported ? "hidden" : ""}>
        <div className="welcome-title">
          <h2>Check your typing speed right now!</h2>
        </div>
      </div>
      <TextGenerator />

      <CountdownTimer />

      <FormInput />

      <Results />

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
