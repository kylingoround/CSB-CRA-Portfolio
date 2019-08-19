import React, { Component } from "react";
import M2J from "markdown-to-jsx";
import styled from "styled-components";
import "styled-components/macro";

// const H1 = props => <div>{props.children}</div>;
const H1 = styled.h1`
  color: red;
  text-align: left;
`;

const H2 = styled.h2`
  text-align: left;
`;

const Img = styled.img`
  /* max-height: 20vh; */
  max-width: 100%;
  text-align: center;
`;

const PP = styled.div`
  text-align: left;
`;

const Dudu = ({ children, ...props }) => <H1 {...props}>{children}</H1>;

const Markdown = props => (
  <M2J
    options={{
      overrides: {
        h1: H1,
        h2: H2,
        img: Img,
        p: PP
      },
      forceBlock: true
    }}
  >
    {props.children}
  </M2J>
);

export default Markdown;
