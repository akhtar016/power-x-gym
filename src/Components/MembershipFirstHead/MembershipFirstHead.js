import React from "react";
import { Link } from "react-router-dom";

const MembershipFirstHead = () => {
  return (
    <div className="bg-img">
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
                <a
                  class="nav-link pl-4 text-white font-weight-bold"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <Link to="/our-classes"></Link>
                <a class="nav-link pl-4 text-white font-weight-bold" href>
                  Our Classes
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link pl-4 text-white font-weight-bold"
                  href="#about-us"
                >
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link pl-4 text-white font-weight-bold"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <Link to="/pricing">
                  <a class="nav-link pl-4 text-white font-weight-bold" href>
                    Pricing
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link pl-4 text-white font-weight-bold"
                  href="#contact-us"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar */}
        <div className="container">
          <div className="d-flex justify-content-center">
            <h1
              className="text-white font-weight-bold text-uppercase"
              id="margin-top"
            >
              Your Gym Membership
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipFirstHead;
