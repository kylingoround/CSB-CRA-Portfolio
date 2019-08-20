import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

// TODOS:
// need responsive design

const StyledLink = styled(Link)`
  margin: 2px;
  &:hover {
    color: red;
  }
  color: ${isCurrent => (isCurrent ? "pink" : "blue")};
  &.active {
    font-weight: 900;
  }
`;

const MommyNavWrapper = styled.div`
  position: fixed;
  width: 100%;
  background: #fff;
`;

const BabyNavWrapper = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 782px;
  /* height: 10px; */
  margin: 20px auto;
`;

const Ghost = styled.div`
  /* width: 50%; */
`;

const LinkWrapper = styled.div`
  margin-right: 5px;
  right: 0;
`;

const NavLink = props => (
  <StyledLink
    {...props}
    getProps={({ isCurrent }) => {
      console.log(isCurrent);
    }}
  >
    {console.log(props)}
    {props.children}
  </StyledLink>
);

const Nav = () => (
  <MommyNavWrapper>
    <BabyNavWrapper>
      <div>Don't mind me</div>
      <Ghost />
      <LinkWrapper>
        <NavLink to="/">Work</NavLink>
        <NavLink to="/lab">Lab</NavLink>
        <NavLink to="/about">About</NavLink>
      </LinkWrapper>
    </BabyNavWrapper>
  </MommyNavWrapper>
);

export default Nav;
