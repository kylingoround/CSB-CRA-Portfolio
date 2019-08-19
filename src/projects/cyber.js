import React, { Component } from "react";
import styled from "styled-components";
// import Markdown from "markdown-to-jsx";
// import ReactMarkdown from "react-markdown";

import Markdown from "../components/markdown";
import Nav from "../components/nav";

import CyberMD from "../markdowns/cyber.md";

const ProjectFooter = () => <div>This is a footer</div>;

const ContentWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0 auto;
  /* background: cyan; */
`;

const Content = () => (
  <ContentWrapper>
    <Markdown>{CyberMD}</Markdown>
  </ContentWrapper>
);

// maybe a banner

const Cyber = () => (
  <div>
    <Nav />
    <Content />
    <ProjectFooter />
  </div>
);

export default Cyber;
