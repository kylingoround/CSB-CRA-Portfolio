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

const Lab = () => (
  <SectionWrapper id="lab">
    <FlexWrapper>
      <div>Secret Lab</div>
    </FlexWrapper>
  </SectionWrapper>
);

export default Lab;
