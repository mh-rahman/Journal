import React, { useState } from "react";

const JournalContext = React.createContext();
// JournalContext is like a pipe for moving data from provider to nested children

export const JournalProvider = ({ children }) => {
  // const journals = [{ title: "Journal 1" }, { title: "Journal 2" }];
  const [journals, setJournals] = useState([]);

  const addJournal = () => {
    setJournals([...journals, { title: `Journal #${journals.length + 1}` }]);
  };

  return (
    <JournalContext.Provider value={{ data: journals, addJournal }}>
      {children}
    </JournalContext.Provider>
  );
};

export default JournalContext;
