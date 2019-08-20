import React from "react";
import styled from "styled-components";
import Markdown from "./markdown";

const ContentWrapper = styled.div`
  text-align: center;
  padding-top: 40px;
  max-width: 782px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  /* background: cyan; */
`;

const Content = props => (
  <ContentWrapper>
    <Markdown>{props.source}</Markdown>
  </ContentWrapper>
);
export default Content;
