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

const NavWrapper = styled.div`
  position: fixed;
`;

const LinkWrapper = styled.div`
  float: right;
  margin-right: 5px;
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
  <NavWrapper>
    <LinkWrapper>
      <NavLink to="/">Work</NavLink>
      <NavLink to="/lab">Lab</NavLink>
      <NavLink to="/about">About</NavLink>
    </LinkWrapper>
  </NavWrapper>
);

export default Nav;
