import React from "react";
import "./PricingPlan.scss";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-body text-uppercase font-weight-bold">
          <span id="text2">Choose the offer</span> that suits you
        </h1>
        <p className="text-secondary pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet.
        </p>
      </div>

      <div className="row">
        <div className="card1 my-bg text-center mr-2 mt-5 mb-5" id="bg1">
          <div className="pricing-box">
            <h5 id="billed-monthly-text">Billed Monthly</h5>
            <h1 id="pricing-head">Advance Plan</h1>
            <h2 id="amount">$140</h2>
            <p>Mobile Optimized</p>
            <p>Best Hosting</p>
            <p>Free Custom</p>
            <p>Outstanding</p>
            <p>Happy Customers</p>
            <Link to="/personal-details">
              <button id="my-btn">Purchase</button>
            </Link>
          </div>
        </div>

        <div className="card1 my-bg text-center mr-2 mt-5 mb-5" id="bg2">
          <div className="pricing-box">
            <h5 id="billed-monthly-text">Billed Monthly</h5>
            <h1 id="pricing-head">Basic Plan</h1>
            <h2 id="amount">$120</h2>
            <p>Mobile Optimized</p>
            <p>Best Hosting</p>
            <p>Free Custom</p>
            <p>Outstanding</p>
            <p>Happy Customers</p>
            <Link to="/personal-details">
              <button id="my-btn">Purchase</button>
            </Link>
          </div>
        </div>

        <div className="card1 my-bg text-center mr-2 mt-5 mb-5" id="bg3">
          <div className="pricing-box">
            <h5 id="billed-monthly-text">Billed Monthly</h5>
            <h1 id="pricing-head">Beginners</h1>
            <h2 id="amount">$90</h2>
            <p>Mobile Optimized</p>
            <p>Best Hosting</p>
            <p>Free Custom</p>
            <p>Outstanding</p>
            <p>Happy Customers</p>
            <Link to="/personal-details">
              <button id="my-btn">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
