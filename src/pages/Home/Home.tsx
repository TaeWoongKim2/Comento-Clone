import React from 'react';

import CampCards from './components/CampCards';
import CommuntyCards from './components/CommuntyCards';

function Home() {
  return (
    <div className="container">
      <section>
        <h2>인기 부트 캠프</h2>
        <CampCards />
      </section>

      <section>
        <h2>특가 할인 캠프</h2>
        <CampCards />
      </section>

      <section className="text__hr">
        <h2>현직자와 소통하며 배우는 실무 스킬, 퍼스널 트레이닝</h2>
      </section>

      <section>
        <h2>커뮤니티</h2>
        <CommuntyCards />
      </section>
    </div>
  );
}

export default Home;
