import React from "react";
import "./SecondPart.scss";

const SecondPart = () => {
  return (
    <div className="container second-part">
      <div className="cards">
        <div className="card1 d-flex align-items-end" id="card1">
          <div>
            <img src={require('../../images/card1.png')} alt=""/>
            <h1 className="pt-4">Progression</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste
            </p>
          </div>
        </div>
        <div className="card2 d-flex align-items-end" id="card2">
          <div>
          <img src={require('../../images/card2.png')} alt=""/>
            <h1 className="pt-4">Workout</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste, 
            </p>
          </div>
        </div>
        <div className="card3 d-flex align-items-end" id="card3">
          <div>
          <img src={require('../../images/card3.png')} alt=""/>
            <h1 className="pt-4">Nutrition</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              libero in accusantium aliquam dolorem iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPart;
