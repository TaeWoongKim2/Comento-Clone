import React from 'react';

function Home() {
  return (
    <>
      <header>
        <div className="header">
          <span className="logo">Co-Lab</span>
          <ul className="logo">
            <li>🧑‍🦲</li>
          </ul>
        </div>
        <nav>
          <h1>
            개발은
            <br />
            코랩과 함께
          </h1>
          <div>
            ___________________________
          </div>
          <div>
            <img src="https://velog.velcdn.com/images/kite1993/post/2f15a821-b044-45fe-8da7-cfc337fdc75d/image.png" alt="html" />
          </div>
        </nav>
        <p />
      </header>
      <div id="container">
        <section>
          <h2>인기 부트 캠프</h2>
        </section>

        <section>
          <h2>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</h2>
        </section>

        <section>
          <h2>커뮤니티</h2>
        </section>
      </div>
      <footer>
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
      </footer>
    </>
  );
}

export default Home;
