import React from 'react';

function Home() {
  return (
    <>
      <header>
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
      </header>

      <div className="container">
        <section>
          <h2>인기 부트 캠프</h2>
        </section>

        <section className="text__hr">
          <h2>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</h2>
        </section>

        <section>
          <h2>커뮤니티</h2>
        </section>
      </div>

      <footer>
        <div className="container">
          <div>
            <h2>Co-Lab</h2>
          </div>
          <div>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호

            Copyright by (주)카페인. All right reserved.
            이용약관  개인정보처리방침
          </div>
          <div>
            <ul>
              <li>icon1</li>
              <li>icon2</li>
              <li>icon3</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
