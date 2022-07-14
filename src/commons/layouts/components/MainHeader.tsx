import React from 'react';

function MainHeader() {
  return (
    <div className="container">
      <div className="header__navigation">
        <span className="header__logo">Co-Lab</span>
        <nav className="header__navigation">
          <ul>
            <li>🧑‍🦲</li>
          </ul>
        </nav>
      </div>
      <div className="header__combobox">
        <h1>
          개발은
          <br />
          코랩과 함께
        </h1>
        <div>
          <img
            src="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png"
            alt="html"
            style={{
              height: '400px',
              width: '597.51px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
