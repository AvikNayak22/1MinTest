import "./App.css";
import HomePage from "./pages/HomePage";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="main__wrapper">
        <HomePage />
      </div>
    </AppProvider>
  );
}

export default App;
