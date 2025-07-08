import React from "react";

function Banner() {
  return (
    <div className="container bg-light p-5 mt-5 mb-5">
      <div className="row align-items-center">
        
        {/* Image: full‑width on sm, 2/3 width on md+ */}
        <div className="col-12 col-md-8 mb-4 mb-md-0">
          <img
            src="/banner.png"
            alt="Banner"
            className="img-fluid w-100"
          />
        </div>
        
        {/* Text: full‑width on sm, 1/3 width on md+ */}
        <div className="col-12 col-md-4">
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            laboriosam repudiandae mollitia asperiores sed dolore rem id harum
            amet autem, repellat fuga quas deleniti cumque odio quasi beatae,
            numquam officiis quidem itaque doloremque placeat!
          </p>
          <h3 className="fw-bold">Niket Gupta</h3>
          <p className="text-muted">Group Head of Talent Acquisition, Yobi</p>
        </div>
        
      </div>
    </div>
  );
}

export default Banner;
