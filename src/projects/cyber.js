import React, { Component } from "react";
import styled from "styled-components";
// import Markdown from "markdown-to-jsx";

// import Markdown from "../components/markdown";
import Nav from "../components/nav";
import Content from "../components/content";

import CyberMD from "../markdowns/cyber.md";

const ProjectFooter = () => <div>This is a footer</div>;

// const ContentWrapper = styled.div`
//   text-align: center;
//   width: 80%;
//   margin: 0 auto;
//   /* background: cyan; */
// `;

// const Content = () => (
//   <ContentWrapper>
//     <Markdown>{CyberMD}</Markdown>
//   </ContentWrapper>
// );

// maybe a banner

const PageWrapper = styled.div``;

const Cyber = () => (
  <PageWrapper>
    <Nav />
    <Content source={CyberMD} />
    <ProjectFooter />
  </PageWrapper>
);

export default Cyber;
