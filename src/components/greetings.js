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

const TextWrapper = styled.div``;

const BigText = styled.div`
  font-size: 80px;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  color: rgba(36, 36, 36, 1);
`;

const Grey = styled.span`
  color: #c4c4c4;
`;

const Indent = styled(BigText)`
  margin-left: -60px;
`;

const Greetings = () => (
  <SectionWrapper id="main">
    <FlexWrapper>
      <div>
        <BigText>
          KYLIN CHEN <Grey>is</Grey>
        </BigText>
        <Indent>
          <Grey>a</Grey> DIGITAL <Grey>and</Grey>
        </Indent>
        <BigText>EXPERIENCE</BigText>
        <BigText>DESIGNER</BigText>
      </div>
    </FlexWrapper>
  </SectionWrapper>
);

export default Greetings;
