import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';

import CampsFixture from 'apis/__fixture__/CampsPopularFixture';
import CampCards from './CampCards';

function PopularBootCamp() {
  return (
    <Container>
      <SectionTitle>
        인기 부트 캠프
      </SectionTitle>
      <SectionBody>
        <CampCards
          camps={CampsFixture}
          isPopular
        />
      </SectionBody>
    </Container>
  );
}

export default PopularBootCamp;

const Container = styled.section`
  margin: 0 auto 48px;
  max-width: 960px;
`;

const SectionTitle = styled.div`
    ${Typography.H2}
`;

const SectionBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
`;
