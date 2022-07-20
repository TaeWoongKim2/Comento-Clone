import React from 'react';
import { Link } from 'react-router-dom';

import { ICommunityCard } from 'types/cards/CommunityCard';
import CommuntyCard from './CommuntyCard';

type CommunityCardsType = {
  communties: ICommunityCard[];
}

function CommuntyCards({
  communties,
}: CommunityCardsType) {
  return (
    <>
      {communties.map((community: ICommunityCard) => (
        <Link
          to={`/community/${community.id}`}
          key={`${community.category}-${community.id}`}
        >
          <CommuntyCard
            community={community}
            isHotTopic
          />
        </Link>
      ))}
    </>
  );
}

export default CommuntyCards;
