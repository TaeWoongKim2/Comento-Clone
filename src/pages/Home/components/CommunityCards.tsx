import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link
          to={`/community/${community.id}`}
          key={`${community.category}-${community.id}`}
        >
          <CommunityCard
            community={community}
            isHotTopic
          />
        </Link>
      ))}
    </>
  );
}

export default CommunityCards;
