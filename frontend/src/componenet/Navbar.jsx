import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-4 container ">
      <div className="container-fluid">
        {/* Brand / Logo on the left */}
        <a className="navbar-brand" href="#">
          Intervue
        </a>

        {/* Collapse Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Buttons aligned to the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-user"></i> Become an Interviewew
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Start a trial</a>
            </li>
          </ul>

          <div className="d-flex">
            <button className="btn btn-outline-dark me-2" type="button">
              Login
            </button>
            <button className="btn btn-dark" type="button">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
