import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Profile } from 'assets/icons/profile_bk.svg';

function Navigation() {
  return (
    <Container>
      <Nav>
        <NavLogo to="/">
          NavLogo-Lab
        </NavLogo>
        <NavMenu>
          <NavMenuItem>
            <Profile />
          </NavMenuItem>
        </NavMenu>
      </Nav>
    </Container>
  );
}

export default Navigation;

const Container = styled.header`
  position: fixed;
  top: 0;
  width: -webkit-fill-available;
  color: var(--color-white);
  background: var(--bg-color-primary3);
`;

const Nav = styled.nav`
  margin: 0 auto;
  padding: 16px;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled(Link)`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.07em;
`;

const NavMenu = styled.ul`
  font-size: 18px;
  line-height: 32px;  
`;

const NavMenuItem = styled.li`
  display: flex;
`;
