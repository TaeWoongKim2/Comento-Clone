import React from 'react';

import { ICampCard } from 'types/cards/CampCard';

import ComboBox from './components/ComboBox';
import CampCards from './components/CampCards';
import CommuntyCards from './components/CommuntyCards';

const CampsFixture: ICampCard[] = [
  {
    id: 1,
    category: 'IT',
    skill: '백엔드',
    image: 'public/images/backend.png',
    title: 'IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무',
    startDate: '1월 28일부터',
    status: '모집완료',
  },
  {
    id: 2,
    category: 'IT',
    skill: 'SQL',
    image: 'public/images/sql.png',
    title: 'SQL 입문부터 활용까지 - 데이터 분석 보고서 작성',
    startDate: '2월 3일부터',
    status: '모집완료',
  },
  {
    id: 3,
    category: 'IT',
    skill: '인공지능',
    image: 'public/images/ai.png',
    title: '인공지능을 활용한 챗봇 구축 기획부터 설계, 구현 A to Z',
    startDate: '2월 8일부터',
    status: '모집완료',
  },
  {
    id: 4,
    category: 'IT',
    skill: '백엔드',
    image: 'public/images/backend-cloud.png',
    title: ' 클라우드 AWS 구축부터 운영까지 실무 AtoZ',
    startDate: '2월 18일부터',
    status: '모집완료',
  },
];

function Home() {
  return (
    <div className="container">
      <ComboBox />

      <section>
        <h2>인기 부트 캠프</h2>
        <CampCards
          camps={CampsFixture}
          isPopular
        />
      </section>

      <section>
        <h2>특가 할인 캠프</h2>
        <CampCards
          camps={CampsFixture}
          isPopular={false}
        />
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
