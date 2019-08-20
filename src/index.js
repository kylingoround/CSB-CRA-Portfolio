import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

import Main from "./pages/main";

import Cyber from "./projects/cyber";

import "./styles.css";

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
        {/* <Lab path="lab" />
        <About path="about" /> */}

        <Cyber path="cyber" />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
