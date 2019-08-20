import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  height: 90vh;
`;

const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => (
  <SectionWrapper id="about">
    <FlexWrapper>
      <div>About Me</div>
    </FlexWrapper>
  </SectionWrapper>
);

export default About;
