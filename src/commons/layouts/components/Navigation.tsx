import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.header`
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
  }
`;

function Navigation() {
  return (
    <Container>
      <nav>
        <Link to="/" className="nav__logo">
          Co-Lab
        </Link>
        <ul className="nav__menu">
          <li>
            <button type="button">
              내 정보
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navigation;
