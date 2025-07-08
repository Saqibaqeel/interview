import React from 'react';
import cards from '../data/data';

function getBadgeColor(difficulty) {
  const value = difficulty.toLowerCase();

  if (value === 'easy') {
    return 'success';
  } else if (value === 'medium') {
    return 'warning';
  } else if (value === 'hard') {
    return 'danger';
  } else {
    return 'secondary';
  }
}

function Card() {
  return (
    <div className="container mt-4 mb-5">
      <div className="row g-4">
        {cards.map((card) => (
          <div className="col-12 col-md-6 col-lg-4" key={card.id}>
            <div
              className="card h-100 shadow-sm"
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0, 0, 0, 0.075)';
              }}
            >
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
