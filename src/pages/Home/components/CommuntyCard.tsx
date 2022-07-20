import React from 'react';

import {
  ICommunityCard,
  IMentoAnswer,
} from 'types/cards/CommunityCard';

type CampCardsType = {
  community: ICommunityCard;
  isHotTopic: boolean;
}

function CommuntyCard({
  community,
  isHotTopic,
}: CampCardsType) {
  return (
    <div>
      <div>
        {isHotTopic ? <span>조회수 TOP</span> : null}
        <span>
          {community.category}
        </span>
      </div>
      <p className="card__title">{community.title}</p>
      <p className="card__question">{community.question}</p>
      <div>
        {community.answers.map((answer: IMentoAnswer) => (
          <div>
            <img
              className="card__mento"
              src={answer.profile}
              alt="mento_image"
            />
            <p className="card__mento">
              {answer.nickname}
            </p>
            <p className="card__answer">
              {answer.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommuntyCard;
