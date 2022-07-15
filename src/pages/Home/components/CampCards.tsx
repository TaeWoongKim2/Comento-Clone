import React from 'react';
import { Link } from 'react-router-dom';

function CampCards() {
  return (
    <>
      <Link to="/detail">
        <p className="card__category">
          Category1
        </p>
        <p className="card__title">
          Title1
        </p>
        <p className="card__date">
          Start Date1
        </p>
      </Link>
      <Link to="/detail">
        <p className="card__category">
          Category2
        </p>
        <p className="card__title">
          Title2
        </p>
        <p className="card__date">
          Start Date2
        </p>
      </Link>
      <Link to="/detail">
        <p className="card__category">
          Category3
        </p>
        <p className="card__title">
          Title3
        </p>
        <p className="card__date">
          Start Date3
        </p>
      </Link>
    </>
  );
}

export default CampCards;
