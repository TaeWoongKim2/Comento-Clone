import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';

import SaleCampsFixture from 'apis/__fixture__/CampsSaleFixture';
import CampCards from './CampCards';

function BargainSaleCamp() {
  return (
    <Container>
      <SectionTitle>
        특가 할인 캠프
      </SectionTitle>
      <SectionBody>
        <CampCards
          camps={SaleCampsFixture}
          isPopular={false}
        />
      </SectionBody>
    </Container>
  );
}

export default BargainSaleCamp;

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
