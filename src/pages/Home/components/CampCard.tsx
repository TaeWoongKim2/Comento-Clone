import React from 'react';
import styled from 'styled-components';
import Typography from 'styles/typography';
import Colors from 'styles/colors';

import { ICamp } from 'types/Camp';

type CampCardType = {
  camp: ICamp;
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
      <CardGradient>
        <CardCategory>
          {isPopular
            ? camp.status
            : `${camp.field}/${camp.skill}`}
        </CardCategory>
        <CardTitle>
          {camp.name}
        </CardTitle>
        <CardDate>
          {camp.startDate}
        </CardDate>
      </CardGradient>
    </Card>
  );
}

export default CampCard;

const Card = styled.div<{ camp: ICamp }>`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 280px;
  color: ${Colors.white};
  background-image: url(${(props) => props.camp.thumbnail || 'https://i.pinimg.com/736x/d0/2b/67/d02b677ce3291053430de6f448a1de24.jpg'});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const CardGradient = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px;
  background: linear-gradient(180deg, rgba(39, 63, 40, 0) 0%, rgba(89, 89, 89, 0.558824) 15.62%, #000000 70.83%);
  border-radius: 0px 0px 10px 10px;
`;

const CardCategory = styled.div`
  ${Typography.Body2}
`;

const CardTitle = styled.div`
  ${Typography.Body1}
`;

const CardDate = styled.div`
  ${Typography.Caption}
`;
