import React from 'react';
import './FourthPart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const FourthPart = () => {
    return (
        <div className="container fourth-part mt-5 mb-5">
            <h1 className="text-body text-uppercase font-weight-bold text-center mb-5">Training <span id="span-text">Programs</span></h1>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 custom-design">
                {/* <img className="img-fluid" src={require('../../images/fourth-part1.png')} alt=""/> */}
                <img className="img-fluid" src="https://i.ibb.co/CB3DP4X/fourth-part1.png" alt="fourth-part1" />
                

                <a href="/" className="text-body text-uppercase">Yoga training session <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
                <div className="col-md-6 custom-design">
                {/* <img className="img-fluid" src={require('../../images/fourth-part2.png')} alt=""/> */}
                <img className="img-fluid" src="https://i.ibb.co/1Lb8FMm/fourth-part2.png" alt="fourth-part2"/>


                <a href="/" className="text-body text-uppercase">Cardio training session <FontAwesomeIcon icon={faArrowRight}/></a>
                </div>
            </div>
            
        </div>
    );
};

export default FourthPart;