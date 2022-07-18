import React from "react";
import Router from "./routes/Router";
import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
