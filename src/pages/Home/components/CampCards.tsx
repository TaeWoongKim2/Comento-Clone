import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICampCard } from 'types/cards/CampCard';
import CampCard from './CampCard';

type CampCardsType = {
  camps: ICampCard[];
  isPopular: boolean;
}

function CampCards({
  camps,
  isPopular,
}: CampCardsType) {
  return (
    <>
      {camps.map((camp: ICampCard, index: number) => (
        <CardLink
          to={`/detail/${camp.id}`}
          key={`${`{${index}-${camp.id}}`}`}
        >
          <CampCard
            camp={camp}
            isPopular={isPopular}
          />
        </CardLink>
      ))}
    </>
  );
}

export default CampCards;

const CardLink = styled(Link)`
  flex: 1;
`;
