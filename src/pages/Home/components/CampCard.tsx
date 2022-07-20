import React from 'react';
import styled from 'styled-components';

import { ICampCard } from 'types/cards/CampCard';

const Card = styled.article<{ camp: ICampCard }>`
  padding: 16px
  height: 280px;
  background-image: url(${(props) => props.camp.image || 'assets/images/card-Image.png'});
  background-size: cover;
  background-position: center;
  border-radius: 10px;

`;

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
      <div className="card--category">
        {isPopular ? camp.status : `${camp.category}/${camp.skill}`}
      </div>
      <div className="card__title">
        {camp.title}
      </div>
      <div className="card__date">
        {camp.startDate}
      </div>
    </Card>
  );
}

export default CampCard;
