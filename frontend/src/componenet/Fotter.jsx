import React from 'react';

const Fotter = () => {
  return (
    // Main footer section with dark background and light gray text color
    <footer className="py-5" style={{ backgroundColor: '#2f3134', color: '#b0b0b0' }}>
      <div className="container">
        {/* Top row of the footer with multiple columns */}
        <div className="row">
          {/* Main Left Column: Contains Logo, Social Media, AND Hire better & faster */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            {/* Logo */}
            <h3 className="mb-4" style={{ color: '#fff' }}>intervue</h3>

            {/* Social Media Links */}
            <ul className="list-unstyled d-flex mb-4"> {/* Added mb-4 for margin below social media links */}
              <li className="me-3"><a href="#facebook" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Facebook</a></li>
              <li className="me-3"><a href="#instagram" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Instagram</a></li>
              <li className="me-3"><a href="#linkedin" className="text-decoration-none" style={{ color: '#b0b0b0' }}>LinkedIn</a></li>
              <li><a href="#pinterest" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Pinterest</a></li>
            </ul>

            {/* "Hire better & faster" section with email input  */}
            <h5 className="mb-3" style={{ color: '#f7d353' }}>Hire better & faster</h5> {/* Yellowish text */}
            <div className="input-group mb-3" style={{ borderBottom: '1px solid white' }}>
  <input
    type="email"
    className="form-control bg-transparent border-0 ps-0"
    placeholder="Enter your email address"
    aria-label="Enter your email address"
    style={{ color: '#fff', borderBottom: 'none' }}
  />
  <button className="btn btn-link p-0" type="button" style={{ color: '#f7d353' }}>
    <i className="fas fa-arrow-right"></i>
  </button>
</div>

          </div>

          {/* Company Navigation Links (This is now effectively the second main column) */}
          <div className="col-lg-2 col-md-4 mb-3 mb-md-0 offset-lg-1"> {/* Added offset-lg-1 for visual spacing if needed to match image */}
            <h5 className="mb-3" style={{ color: '#fff' }}>Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#sogehts" className="text-decoration-none" style={{ color: '#b0b0b0' }}>So gehts</a></li>
              <li className="mb-2"><a href="#erfahrung" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Erfahrung</a></li>
              <li className="mb-2"><a href="#alligner" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Alligner</a></li>
              <li className="mb-2"><a href="#preise" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Preise</a></li>
              <li className="mb-2"><a href="#standorte" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Standorte</a></li>
            </ul>
          </div>

          {/* Resources Navigation Links */}
          <div className="col-lg-2 col-md-4 mb-3 mb-md-0">
            <h5 className="mb-3" style={{ color: '#fff' }}>Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#blog" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Blog</a></li>
              <li className="mb-2"><a href="#faq" className="text-decoration-none" style={{ color: '#b0b0b0' }}>FAQ</a></li>
              <li className="mb-2"><a href="#liftmedia" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Lift Media</a></li>
              <li className="mb-2"><a href="#offenestellen" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Offene Stellen</a></li>
              <li className="mb-2"><a href="#pressekit" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Presse kit</a></li>
            </ul>
          </div>

          {/* Product Navigation Links (repeated based on your image) */}
          <div className="col-lg-2 col-md-4">
            <h5 className="mb-3" style={{ color: '#fff' }}>Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#blog" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Blog</a></li>
              <li className="mb-2"><a href="#faq" className="text-decoration-none" style={{ color: '#b0b0b0' }}>FAQ</a></li>
              <li className="mb-2"><a href="#liftmedia" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Lift Media</a></li>
              <li className="mb-2"><a href="#offenestellen" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Offene Stellen</a></li>
              <li className="mb-2"><a href="#pressekit" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Presse kit</a></li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-5" style={{ borderColor: '#4a4d50' }} />

        {/* Copyright and Legal Links */}
        <div className="row text-center text-md-start">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="mb-0">&copy; 2023 Intervue. Crafted by great minds.</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3"><a href="#datenschutz" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Datenschutz</a></li>
              <li className="me-3"><a href="#impressum" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Impressum</a></li>
              <li className="me-3"><a href="#cookiepolicy" className="text-decoration-none" style={{ color: '#b0b0b0' }}>Cookie Policy</a></li>
              <li><a href="#agbs" className="text-decoration-none" style={{ color: '#b0b0b0' }}>AGBs</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Fotter;