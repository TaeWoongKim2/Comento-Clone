import React from 'react';
import { Link } from 'react-router-dom';

type CampCard = {
  id: Number;
  category: 'IT' | '디자인' | '기획';
  lecture: '백엔드' | 'SQL' | '프론트';
  status: '모집전' | '모집중' | '모집완료';
  image: string;
  title: string;
  startDate: string;
};

function CampCard({
  id,
  category,
  lecture,
  status,
  image,
  title,
  startDate,
}: CampCard) {
  return (
    <Link to={`/detail/${id}`}>
      <div>
        <img src={image} alt="camp_image" />
        <p className="card__category">
          {`${category}/${lecture}`}
        </p>
        <p className="card__category">
          {status}
        </p>
        <p className="card__title">
          {title}
        </p>
        <p className="card__date">
          {startDate}
        </p>
      </div>
    </Link>
  );
}

export default CampCard;
