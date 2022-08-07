import React from 'react';

import { ICommunity } from 'types/Community';
import CommunityCard from './CommunityCard';

type CommunityCardsType = {
  communties: ICommunity[];
}

function CommunityCards({
  communties,
}: CommunityCardsType) {
  return (
    <>
      {communties.map((community: ICommunity) => (
        <CommunityCard
          community={community}
        />
      ))}
    </>
  );
}

export default CommunityCards;
