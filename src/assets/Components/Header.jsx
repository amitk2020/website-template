import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <header className="border-bottom shadow-sm">
      {/* Top Info Row */}
      <div className="container py-2">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-md-3 d-flex align-items-center">
            <img
              src="/logo.svg"
              alt="Compactor Logo"
              style={{ maxHeight: 40 }}
              className="me-2"
            />
            <div>
              <strong>COMPACTOR</strong>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                ASPHALT PAVING
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="col-md-6 d-none d-md-flex justify-content-around text-center">
            <div>
              <div className="fw-bold">📍 Our Address</div>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                125 Golden St, New York, NY
              </div>
            </div>
            <div>
              <div className="fw-bold">🕒 Work Time</div>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                hi@compactor.com
              </div>
            </div>
            <div>
              <div className="fw-bold">📞 Call Us Today</div>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                548-661-322
              </div>
            </div>
          </div>

          {/* Search, Cart, Contact Button */}
          <div className="col-md-3 d-flex justify-content-end align-items-center gap-3">
            <i className="bi bi-search" role="button"></i>
            <div className="position-relative" role="button">
              <i className="bi bi-cart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </div>
            <button className="btn btn-warning fw-bold">CONTACT US</button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-top">
        <div className="container">
          <ul className="nav nav-pills py-2 gap-2 justify-content-center justify-content-md-start">
            <li className="nav-item">
              <a className="nav-link active text-dark" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Elements
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;