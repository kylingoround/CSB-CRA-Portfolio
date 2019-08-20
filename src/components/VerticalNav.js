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
  padding-left: 20px;
`;

const Dudu = styled.div`
  writing-mode: vertical-rl;
  /* text-orientation: mixed; */
`;

// const NavLink = styled(Link)`
//   margin: 20px auto;
// `;

const NavLink = styled.a`
  margin: 20px auto;
`;

// add transition
const VerticalNav = () => (
  <NavWrapper>
    <VerticalCenteringWrapper>
      <Dudu>
        <NavLink href="#main">Main</NavLink>
        <NavLink href="#works">Work</NavLink>
        <NavLink href="#lab">Lab</NavLink>
        <NavLink href="#about">About</NavLink>

        {/* <NavLink href="/lab">Lab</NavLink> */}
        {/* <NavLink href="/about">About</NavLink> */}
      </Dudu>
    </VerticalCenteringWrapper>
  </NavWrapper>
);

export default VerticalNav;
