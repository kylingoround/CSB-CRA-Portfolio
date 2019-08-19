import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router, Link } from "@reach/router";

import Work from "./pages/work";
import Lab from "./pages/lab";
import About from "./pages/about";

import Cyber from "./projects/cyber";

import "./styles.css";

function App() {
  return (
    <div>
      <Router>
        <Work path="/" />
        <Lab path="lab" />
        <About path="about" />

        <Cyber path="cyber" />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
