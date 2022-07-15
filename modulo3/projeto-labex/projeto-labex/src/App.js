import React from "react";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Chakra Petch', sans-serif;
      
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
