import React from "react";
import * as ReactDOM from "react-dom"
import {BrowserRouter as Rout} from "react-router-dom"
/* import Results from "./components/Results";
import HomePage from "./pages/HomePage"; */
import MainRoute from "./routes/MainRoute";
import { Styled } from "./Styled";

const App = () => {
  return (
    <Rout>
      <Styled/>
        <MainRoute/>
    </Rout>
  );
};

export default App;
