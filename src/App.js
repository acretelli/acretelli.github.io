import React, { useState, useMemo } from "react";
import Router from "./routes/Router";
import { GlobalStyle } from "./styles/globalStyle";
import { AppContainer } from "./styles/mainStyles";
import { UserContext } from "./components/UserContext";


function App() {
  const [ language, setLanguage ] = useState("pt");

  const providerLanguage = useMemo(() => ({language, setLanguage}), [language, setLanguage])
  return (
    <AppContainer>
      <GlobalStyle />
      <UserContext.Provider value={providerLanguage}>
      <Router />
      </UserContext.Provider>
    </AppContainer>
  );
}

export default App;
