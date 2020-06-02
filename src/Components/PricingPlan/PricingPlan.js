import React from "react";
import "./PricingPlan.scss";

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

      <div className="cards mt-5 mb-5">
        <div className="card1">
          <div className="pricing-box">
            <h5 id="billed-monthly-text">Billed Monthly</h5>
            <h1 id="pricing-head">Advance Plan</h1>
            <h2 id="amount">$140</h2>
            <p>Mobile Optimized</p>
            <p>Best Hosting</p>
            <p>Free Custom</p>
            <p>Outstanding</p>
            <p>Happy Customers</p>
            <button>Purchase</button>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default PricingPlan;
