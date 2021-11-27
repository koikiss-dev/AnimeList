import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import { Styled } from "./Styled";
import Footer from './components/Footer'

const App = () => {
  return (
    <Rout>
      <Styled />
      <MainRoute />
      <Footer/>
    </Rout>
  );
};

export default App;
