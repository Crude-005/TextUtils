import React from "react";
// import PropTypes from "prop-types";

export default function Navbar({ title = "NavBar", homeText = "Home", mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode ? "dark" : "light"} bg-${mode ? "dark" : "light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {homeText}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode} />
            <label className={`form-check-label text-${mode ? "light" : "dark"} htmlFor="flexSwitchCheckDefault"`}>Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
