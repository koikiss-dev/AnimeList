import React from "react";
import { BrowserRouter as Rout } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import { Styled } from "./Styled";

const App = () => {
  return (
    <Rout>
      <Styled />
      <MainRoute />
    </Rout>
  );
};

export default App;
