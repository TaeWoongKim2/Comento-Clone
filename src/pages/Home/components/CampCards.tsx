import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ICamp } from 'types/Camp';
import CampCard from './CampCard';

type CampCardsType = {
  camps: ICamp[];
  isPopular: boolean;
}

function CampCards({
  camps,
  isPopular,
}: CampCardsType) {
  return (
    <>
      {camps.map((camp: ICamp, index: number) => (
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
