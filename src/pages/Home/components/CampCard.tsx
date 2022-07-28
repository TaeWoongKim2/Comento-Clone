import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';

import { ICampCard } from 'types/cards/CampCard';

type CampCardType = {
  camp: ICampCard;
  isPopular: boolean;
}

function CampCard({
  camp,
  isPopular,
}: CampCardType) {
  return (
    <Card
      camp={camp}
    >
      <CardCategory>
        {isPopular
          ? camp.status
          : `${camp.category}/${camp.skill}`}
      </CardCategory>
      <CardTitle>
        {camp.title}
      </CardTitle>
      <CardDate>
        {camp.startDate}
      </CardDate>
    </Card>
  );
}

export default CampCard;

const Card = styled.article<{ camp: ICampCard }>`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  height: calc(280px - 32px);
  color: var(--color-white);
  background-image: url(${(props) => props.camp.image || 'https://i.pinimg.com/736x/d0/2b/67/d02b677ce3291053430de6f448a1de24.jpg'});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const CardCategory = styled.div`
  ${Typography.Body2}
`;

const CardTitle = styled.div`
  ${Typography.Body1}
`;

const CardDate = styled.div`
  ${Typography.Body1}
`;
