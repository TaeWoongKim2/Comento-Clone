import React from 'react';

import { ICommunityCard } from 'types/cards/CommunityCard';
import CommunityCard from './CommunityCard';

type CommunityCardsType = {
  communties: ICommunityCard[];
}

function CommunityCards({
  communties,
}: CommunityCardsType) {
  return (
    <>
      {communties.map((community: ICommunityCard) => (
        <CommunityCard
          community={community}
        />
      ))}
    </>
  );
}

export default CommunityCards;
