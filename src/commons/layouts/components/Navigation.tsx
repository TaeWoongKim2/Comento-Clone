import React from 'react';

function Navigation() {
  return (
    <div className="container">
      <div className="header__navigation">
        <span className="header__logo">Co-Lab</span>
        <nav className="header__navigation">
          <ul>
            <li>
              <button type="button">
                내 정보
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
