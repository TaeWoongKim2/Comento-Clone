import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';

import { ICommunity } from 'types/Community';
import CommunityCards from './CommunityCards';

type CommunityType = {
  communities: ICommunity[];
}

function CommunitySection({
  communities,
}: CommunityType) {
  return (
    <Container>
      <SectionTitle>
        커뮤니티
      </SectionTitle>
      <SectionBody>
        <CommunityCards
          communties={communities}
        />
      </SectionBody>
    </Container>
  );
}

export default CommunitySection;

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
