import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [textImported, setTextImported] = useState(false);
  const [startTime, setStartTime] = useState(false);
  const [finished, setFinished] = useState(false);

  const getParagraph = (paragraph) => {
    setText(paragraph);
  };

  return (
    <AppContext.Provider
      value={{
        text,
        setText,
        input,
        setInput,
        textImported,
        setTextImported,
        startTime,
        setStartTime,
        finished,
        setFinished,
        getParagraph,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
