import React from "react";
import "./FifthPart.scss";

const FifthPart = () => {
  return (
    <div className="container fifth-part">
      <h1 className="text-uppercase font-weight-bold text-body text-center">
        <span id="text">Why</span> Choose us
      </h1>
      <div className="cards" id="custom-card">
        <div className="card1 d-flex align-items-end">
          <div className='pt-5'>
            <img src={require('../../images/card4.png')} alt=""/>
            <h1 className="text-body pt-5" id="card-text">Free fitness training</h1>
            <p className="text-body pt-3 p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste
            </p>
          </div>
        </div>
        <div className="card2 d-flex align-items-end">
          <div className="pt-5">
          <img src={require('../../images/card5.png')} alt=""/>
            <h1 className="text-body pt-5" id="card-text">Tons of Cardio & Strength</h1>
            <p className="text-body pt-3 p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste, 
            </p>
          </div>
        </div>
        <div className="card3 d-flex align-items-end">
          <div className="pt-5">
          <img src={require('../../images/card6.png')} alt=""/>
            <h1 className="text-body pt-5" id="card-text">No commitment membership</h1>
            <p className="text-body pt-3 p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthPart;
