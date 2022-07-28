import React from 'react';
import styled from 'styled-components';

import SaleCampsFixture from 'apis/__fixture__/SaleCampsFixture';
import CampCards from './CampCards';

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
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }
`;

function BargainSaleCamp() {
  return (
    <Container>
      <div className="section--title">특가 할인 캠프</div>
      <div className="section--content">
        <CampCards
          camps={SaleCampsFixture}
          isPopular={false}
        />
      </div>
    </Container>
  );
}

export default BargainSaleCamp;
