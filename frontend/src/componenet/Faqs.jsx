import React from 'react';

const FAQsSection = () => (
  <section className="py-5" style={{ backgroundColor: '#FFEFDD' }}>
    <div className="container">
      <div className="row">
        {/* Intro */}
        <div className="col-lg-5 mb-4 mb-lg-0">
          <h2 className="mb-3">FAQs</h2>
          <p className="text-muted mb-4">
            Here are frequently asked questions to clear all your doubts.
          </p>
          <p className="mb-2">Still have doubts?</p>
          <p>
            <a href="#contact" className="text-decoration-none text-primary">
              <i className="fas fa-phone-alt me-2"></i>
              Talk to our representative
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="col-lg-7">
          <div className="accordion accordion-flush" id="faqAccordion">

            {/* Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  style={{
                    backgroundColor: '#FFEFDD',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  How do I schedule an interview?
                  <i className="fas fa-plus ms-auto toggle-icon"></i>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  You can schedule an interview through our online portal by selecting your preferred time slot from the available options.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  style={{
                    backgroundColor: '#FFEFDD',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  Will I be charged per interview?
                  <i className="fas fa-plus ms-auto toggle-icon"></i>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Our pricing model offers various packages. Please refer to our pricing page for detailed information on charges.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed d-flex align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                  style={{
                    backgroundColor: '#FFEFDD',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  Can I get a trial for On‑demand interviews?
                  <i className="fas fa-plus ms-auto toggle-icon"></i>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-muted">
                  Yes, we offer a trial period for our On‑demand interview services. Please contact our sales team for more details.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* Custom CSS */}
    <style jsx>{`
      /* Black line between items */
      #faqAccordion .accordion-item {
        border-bottom: 1px solid #000;
      }
      /* Hide Bootstrap’s chevron */
      #faqAccordion .accordion-button::after {
        display: none;
      }
      /* Rotate the plus to minus when open */
      #faqAccordion .accordion-button:not(.collapsed) .toggle-icon {
        transform: rotate(45deg);
        transition: transform 0.2s ease;
      }
      .toggle-icon {
        transition: transform 0.2s ease;
      }
    `}</style>
  </section>
);

export default FAQsSection;
