import React from "react";
import "./OurClasses.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OurClasses = () => {
  return (
    <div className="container classes">
      <div className="cards">
        <div
          className="card1 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="psycho-training"
        >
          <h3 className="font-weight-bold text-uppercase custom-btn text-center">
            Psycho training <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </div>
        <div
          className="card2 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="self-defense"
        >
          <h3 className="font-weight-bold text-uppercase custom-btn text-center">
            Self Defense <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </div>
        <div
          className="card3 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="advanced-gym"
        >
          <Link to="/advanced-gym" className="font-weight-bold text-uppercase custom-btn text-center">
            Advance gym <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          
        </div>
      </div>

      <div className="cards">
        <div
          className="card1 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="cardio-training"
        >
          <h3 className="font-weight-bold text-uppercase custom-btn text-center">
            cardio training <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </div>
        <div
          className="card2 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="strength-training"
        >
          <h3 className="font-weight-bold text-uppercase custom-btn text-center">
            strength training <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </div>
        <div
          className="card3 d-flex align-items-end mt-5 mb-5 position-relative justify-content-center"
          id="psycho-training-2"
        >
          <h3 className="font-weight-bold text-uppercase custom-btn text-center">
            Psycho training <FontAwesomeIcon icon={faArrowRight} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;
