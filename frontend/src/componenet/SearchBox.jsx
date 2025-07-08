import React from 'react';

export default function SearchBox() {
  return (
    <div
      className="container my-4 position-relative"
      style={{ maxWidth: '600px' }}
    >
      {/* Absolute‑positioned icon */}
      <i
        className="fa fa-search position-absolute"
        style={{
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#aaa',
          pointerEvents: 'none'
        }}
      />

      {/* Single pill‑shaped input */}
      <input
        type="text"
        className="form-control rounded-pill ps-5"
        placeholder="Search for resource here"
        style={{
          height: '56px',
          backgroundColor: '#f5f5f5',
          border: 'none'
        }}
      />
    </div>
  );
}
