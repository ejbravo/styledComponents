import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Toggle } from '.';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${(props: { open: boolean }) => (props.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  background: white;
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};

  @media (min-width: 768px) {
    display: flex;
    left: initial;
    position: relative;
    top: initial;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
  }
`;

// Inherit from NavLink
const StyledLink = styled(NavLink)`
  color: black;
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }

  &:visited {
    color: black;
  }

  &:focus {
    color: ${(props) => props.theme.warningColor};
  }

  @media (min-width: 768px) {
    color: whitesmoke;

    &:visited {
      color: whitesmoke;
    }
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background-color: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={isMenuOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <Toggle isActive />
      </Menu>
    </HeaderWrapper>
  );
};

export default Header;
