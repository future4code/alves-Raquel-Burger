import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Matches from "./components/Matches";
import { ContainerApp, ContainerCardApp } from "./components/Styled"
import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Space Grotesk', sans-serif;
        background-color: #edebf0;
    }
`
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
    <div>
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContainerApp>
        <ContainerCardApp>
          <Header currentScreen={currentScreen} changeScreenMatches={changeScreenMatches} changeScreenHome={changeScreenHome} />
          {selectScreen()}
        </ContainerCardApp>
      </ContainerApp>
    </div>
  );
}

export default App;
