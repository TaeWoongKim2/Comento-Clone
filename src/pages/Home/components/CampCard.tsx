import React from 'react';
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
    <div>
      <img src={camp.image} alt="camp_image" />
      <p className="card__category">
        {isPopular ? camp.status : `${camp.category}/${camp.skill}`}
      </p>
      <p className="card__title">
        {camp.title}
      </p>
      <p className="card__date">
        {camp.startDate}
      </p>
    </div>
  );
}

export default CampCard;
