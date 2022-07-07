import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Matches from "./components/Matches";
import { ContainerApp, ContainerCardApp } from "./components/Styled"

function App() {
  const [currentScreen, setCurrentScreen] = useState("home")

  const changeScreenHome = () => {
    setCurrentScreen("home")
  }
  const changeScreenMatches = () => {
    setCurrentScreen("matches")
  }

  const selectScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home />
      case "matches":
        return <Matches />
      default:
        return "pagina não encontrada"

    }
  }
  return (
    <ContainerApp>
      <ContainerCardApp>
        <Header currentScreen={currentScreen} changeScreenMatches={changeScreenMatches} changeScreenHome={changeScreenHome} />
        {selectScreen()}
      </ContainerCardApp>
    </ContainerApp>
  );
}

export default App;
