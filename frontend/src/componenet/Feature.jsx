import React from 'react';
// Changed import from featureData to cardData
import cardData from '../data/featureData'; 

function Feature() {
  return (
    <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          {cardData.map((card, index) => ( // Changed feature to card for clarity with cardData
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '8px' }}>
                <div className="card-body d-flex flex-column">

                  {/* Image rendering: Directly using imgSrc without conditional check */}
                  <div className="mb-4" style={{ height: '180px', backgroundColor: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', overflow: 'hidden' }}>
                    <img
                      src={card.imgSrc} // Using imgSrc directly from your cardData
                      alt={card.title} // Using title as alt text
                      className="img-fluid"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Card Title */}
                  <h5 className="card-title mb-3">{card.title}</h5> {/* Using title from your cardData */}

                  {/* Card Description */}
                  <p className="card-text text-muted flex-grow-1">{card.description}</p> {/* Using description from your cardData */}

                  {/* "Know more" Link - No link property in your cardData, so defaulting to '#' */}
                  <a href="#" className="text-decoration-none mt-3" style={{ color: '#0d6efd', fontWeight: '500' }}>
                    Know more <i className="fas fa-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;