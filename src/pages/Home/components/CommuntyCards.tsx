import React from 'react';
import { Link } from 'react-router-dom';

function CommuntyCards() {
  return (
    <>
      <Link to="/community">
        <div>
          <div>
            <span>조회수 TOP</span>
            <span>취업 고민</span>
          </div>
          <p className="card__title">Title1</p>
          <p className="card__question">Question1</p>
          <p className="card__date">Start Date1</p>
          <div>
            <img
              className="card__mento"
              src=""
              alt=""
            />
            <p className="card__mento">Mento1</p>
            <p className="card__answer">Answer1</p>
          </div>
        </div>
      </Link>
      <Link to="/community">
        <div>
          <p className="card__question">Question2</p>
          <p className="card__title">Title2</p>
          <p className="card__date">Start Date2</p>
          <div>
            <img
              className="card__mento"
              src=""
              alt=""
            />
            <p className="card__mento">Mento2</p>
            <p className="card__answer">Answer2</p>
          </div>
        </div>
        <div>
          <p className="card__title">Title3</p>
          <p className="card__question">Question3</p>
          <div>
            <img
              className="card__mento"
              src=""
              alt=""
            />
            <p className="card__mento">Mento3</p>
            <p className="card__answer">Answer3</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CommuntyCards;
