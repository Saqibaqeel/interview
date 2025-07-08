import React from 'react';
import cards from '../data/data';

function getBadgeColor(difficulty) {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'success';
    case 'medium':
      return 'warning';
    case 'hard':
      return 'danger';
    default:
      return 'secondary';
  }
}

function Card() {
  return (
    <div className="container mt-4 m-b-5">
      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-12 col-md-6 col-lg-4" key={card.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <span className={`badge bg-${getBadgeColor(card.difficulty)} me-2`}>
                  {card.difficulty}
                </span>
                <span className="text-uppercase text-muted" style={{ fontSize: '0.8rem' }}>
                  {card.domain}
                </span>
                <h5 className="card-title mt-2">{card.title}</h5>
                <p className="card-text" style={{ fontSize: '0.9rem' }}>
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
