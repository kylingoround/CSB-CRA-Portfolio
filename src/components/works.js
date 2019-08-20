import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  height: 100vh;
`;

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Works = () => (
  <SectionWrapper id="works">
    <FlexWrapper>
      <div>Projects</div>
    </FlexWrapper>
  </SectionWrapper>
);

export default Works;
