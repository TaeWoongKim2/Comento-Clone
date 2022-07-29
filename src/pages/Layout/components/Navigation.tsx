import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Profile } from 'assets/icons/profile_bk.svg';

function Navigation() {
  return (
    <Container>
      <nav>
        <Link to="/" className="nav__logo">
          Co-Lab
        </Link>
        <ul className="nav__menu">
          <li>
            <Profile />
          </li>
        </ul>
      </nav>
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

  nav {
    margin: 0 auto;
    padding: 16px;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__logo {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.07em;
    }

    .nav__menu {
      font-size: 18px;
      line-height: 32px;    
    }

    .nav__menu li {
      display: flex;
    }
  }
`;
