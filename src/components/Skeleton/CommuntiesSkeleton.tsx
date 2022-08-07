import React from 'react';
import styled from 'styled-components';

import Skeleton from 'components/Skeleton';
import Typography from 'styles/typography';

function CommuntiesSkeleton() {
  const randomWidth = 100 + Math.floor(Math.random() * 200);

  return (
    <Container>
      <div className="community-title">
        <Community.Title
          width={randomWidth}
          animated
        />
      </div>
      <div className="community-body">
        <Community.Item animated />
        <Community.Item animated />
        <Community.Item animated />
        <Community.Item animated />
      </div>
    </Container>
  );
}

export default CommuntiesSkeleton;

const Container = styled.section`
  margin: 0 auto 48px;
  max-width: 960px;
  
  .community-title {
    ${Typography.H2}
    margin-bottom: 16px;
  }

  .community-body {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }
`;

const Community = {
  Title: styled(Skeleton)`
    width: ${(props) => (`${props.width || 250}px`)};
    height: 34px;
  `,
  Item: styled(Skeleton)`
    flex: 1;
    height: 320px;
    border-radius: 10px;
  `,
};
