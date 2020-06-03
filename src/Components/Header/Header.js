import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="background-img">
      <div className="container">
        {/* Navbar */}
        <nav class="navbar navbar-expand-lg pt-5">
        <a class="navbar-brand" href="/">
          <h2 className="text-white font-weight-bold text-uppercase">
            Power <span>X</span>
          </h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link text-white font-weight-bold" href="/">
                Home <span class="sr-only pl-4">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pl-4 text-white font-weight-bold" href="#services">
                Services
              </a>
            </li>
            <li class="nav-item">
              <Link to="/our-classes"><a class="nav-link pl-4 text-white font-weight-bold" href>
                Our Classes
              </a></Link>
            </li>
            
            <li class="nav-item">
              <a class="nav-link pl-4 text-white font-weight-bold" href="#about-us">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link pl-4 text-white font-weight-bold" href="#blog">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <Link to="/pricing"><a class="nav-link pl-4 text-white font-weight-bold" href>
                Pricing
              </a></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link pl-4 text-white font-weight-bold" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navbar */}
        <div className="container bottom-section">
          <div className="row">
            <div className="col-md-6 left-area">
              <h1 id="margin">The best fitness</h1>
              <h1>studio in town</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, quod. Illum quaerat qui quidem vitae atque. Nam dolorem
                doloribus dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, cumque?
              </p>
              <Link to="/pricing"><a href>Join us</a></Link>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">
              <div class="vl" id="margin"></div>
              <div className="font-icon"><FontAwesomeIcon icon={faPlayCircle} /></div>
              <div class="vl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
