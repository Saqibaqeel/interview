import React from "react";

const leftCards = [
  {
    title: "Security",
    desc: "Features you expect at every interview stage — protected by design.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Compliance",
    desc: "Enterprise-grade compliance built into Intervue to meet commitments.",
    icon: "fas fa-database",
  },
];

const rightCards = [
  {
    title: "Intervue for Startups",
    desc: "A lightweight and scalable way to hire smarter.",
    icon: "fas fa-rocket",
  },
  {
    title: "Intervue for Enterprise",
    desc: "Scalable interviewing for hiring at enterprise scale.",
    icon: "fas fa-building",
  },
];

function SecurityCard() {
  return (
    <div className="container py-5">
      <div className="row gy-4">
        <div className="col-12 col-lg-8">
          <div className="row">
            {/* Left Cards */}
            <div className="col-12 col-md-8">
              <div className="row g-3">
                {leftCards.map((card, idx) => (
                  <div className="col-12 col-sm-6" key={idx}>
                    <div className="card h-100 border rounded-3 p-3">
                      <div className="card-body d-flex justify-content-between align-items-start">
                        <div>
                          <i className={`${card.icon} text-dark mb-3`} style={{ fontSize: "1.5rem" }}></i>
                          <h6 className="fw-semibold mb-2">{card.title}</h6>
                          <p className="text-muted small mb-0">{card.desc}</p>
                        </div>
                        <i className="fas fa-arrow-right text-muted"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Cards */}
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column gap-3 h-100">
                {rightCards.map((card, idx) => (
                  <div className="card flex-fill border rounded-3 p-3" key={idx}>
                    <div className="card-body d-flex justify-content-between align-items-start">
                      <div>
                        <i className={`${card.icon} text-dark mb-3`} style={{ fontSize: "1.5rem" }}></i>
                        <h6 className="fw-semibold mb-2">{card.title}</h6>
                        <p className="text-muted small mb-0">{card.desc}</p>
                      </div>
                      <i className="fas fa-arrow-right text-muted"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right spacer for layout symmetry */}
        <div className="col-12 col-lg-4"></div>
      </div>
    </div>
  );
}

export default SecurityCard;
