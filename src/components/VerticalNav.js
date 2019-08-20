import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const NavWrapper = styled.div`
  height: 100vh;
  position: fixed;
  margin: 0 auto;
`;
const VerticalCenteringWrapper = styled.div`
  /* writing-mode: vertical-rl;
  text-orientation: mixed; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Dudu = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

const NavLink = styled(Link)``;

const VerticalNav = () => (
  <NavWrapper>
    <VerticalCenteringWrapper>
      <Dudu>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/lab">Lab</NavLink>
        <NavLink to="/about">About</NavLink>
      </Dudu>
    </VerticalCenteringWrapper>
  </NavWrapper>
);

export default VerticalNav;
