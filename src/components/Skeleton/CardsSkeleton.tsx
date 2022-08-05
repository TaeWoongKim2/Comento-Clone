import React from 'react';
import styled from 'styled-components';

import Skeleton from 'components/Skeleton';
import Typography from 'styles/typography';

function CardsSkeleton() {
  const randomWidth = 100 + Math.floor(Math.random() * 200);

  return (
    <Container>
      <div className="camp-title">
        <CardTitle
          width={randomWidth}
          animated
        />
      </div>
      <div className="camp-cards">
        <CardItem animated />
        <CardItem animated />
        <CardItem animated />
        <CardItem animated />
      </div>
    </Container>
  );
}

export default CardsSkeleton;

const Container = styled.section`
  margin: 0 auto 48px;
  max-width: 960px;
  
  .section-title {
    ${Typography.H2}
  }

  .camp-cards {
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
  }
`;

const CardTitle = styled(Skeleton)`
  width: ${(props) => (`${props.width || 250}px`)};
  height: 34px;
`;

const CardItem = styled(Skeleton)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 280px;
  border-radius: 10px;
`;
