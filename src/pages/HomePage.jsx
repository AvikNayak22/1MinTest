import TextGenerator from "../components/textGenerator/TextGenerator";
import FormInput from "../components/formInput/FormInput";

const HomePage = () => {
  return (
    <div>
      <h1 className="app-title">Speedytyper</h1>
      <div className="welcome-title">
        <h2>Get Started!</h2>
      </div>

      {/* Text Generator */}
      <TextGenerator />

      {/* form input */}
      <FormInput />

      <div>
        <button>Start Typing</button>
      </div>

      <div className="btn-restart hidden">
        <button>Restart</button>
      </div>
    </div>
  );
};

export default HomePage;
