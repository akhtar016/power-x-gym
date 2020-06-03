import React from 'react';
import "./ThirdPart.scss";

const ThirdPart = () => {
    return (
        <div className="container third-part">
            <div className="row">
            <div className="col-md-5">
                {/* <img className="img-fluid" src={require('../../images/third-part.jpg')} alt=""/> */}
                <img className="img-fluid" src="https://i.ibb.co/wRBNQtZ/third-part.jpg" alt="third-part"/>

            </div>
            <div className="col-md-7 pl-5 pr-4">
                <h1 className="text-uppercase font-weight-bold text-light">About us</h1>
                <h1 className="text-uppercase font-weight-bold" id="text2">We are here to dream!</h1>
                <h1 className="text-uppercase font-weight-bold text-dark">our team is here serve you</h1>
                <p className="text-body pr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, repellendus. Mollitia provident qui, cupiditate error corporis, alias beatae itaque vel magni sint, harum ex repudiandae delectus et cumque saepe dolores?</p>

            </div>
            </div>
            
        </div>
    );
};

export default ThirdPart;