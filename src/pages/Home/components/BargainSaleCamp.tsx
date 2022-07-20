import React from 'react';
import styled from 'styled-components';

import { ICampCard } from 'types/cards/CampCard';
import CampCards from './CampCards';

const CampsFixture: ICampCard[] = [
  {
    id: 1,
    category: 'IT',
    skill: '백엔드',
    image: '',
    title: 'IT 대기업 현업 개발자와 함께 하는 백엔드 개발 실무',
    startDate: '1월 28일부터',
    status: '모집완료',
  },
  {
    id: 2,
    category: 'IT',
    skill: 'SQL',
    image: '',
    title: 'SQL 입문부터 활용까지 - 데이터 분석 보고서 작성',
    startDate: '2월 3일부터',
    status: '모집완료',
  },
  {
    id: 3,
    category: 'IT',
    skill: '인공지능',
    image: '',
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

const Container = styled.section`
  margin: 0 auto 48px;
  max-width: 960px;

  .section--title {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.01em;
    color: #000000;
  }

  .section--content {
    
  }
`;

function BargainSaleCamp() {
  return (
    <Container>
      <div className="section--title">특가 할인 캠프</div>
      <div className="section--content">
        <CampCards
          camps={CampsFixture}
          isPopular={false}
        />
      </div>
    </Container>
  );
}

export default BargainSaleCamp;
