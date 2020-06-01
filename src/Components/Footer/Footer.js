import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="bg-dark pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2 className="text-white font-weight-bold">
              Power <span>X</span>
            </h2>
          </div>
          <div className="col-md-2">
            <p>Need Help?</p>
            <p>Help Center</p>
            <p>Email Support</p>
            <p>Live Chat</p>
            <p>Gift Certifications</p>
            <p>Send Us Feedback</p>
          </div>
          <div className="col-md-2">
            <p>Digital Resources</p>
            <p>Articles</p>
            <p>E-books</p>
          </div>
          <div className="col-md-2">
            <p>Connect with Us</p>
            <div className="d-flex justify-content-between mb-3">
            <img src={require('../../images/bxl-youtube.png')} alt=""/>
            <img src={require('../../images/bxl-facebook.png')} alt=""/>
            <img src={require('../../images/bxl-instagram.png')} alt=""/>
            <img src={require('../../images/bxl-twitter.png')} alt=""/>
            <img src={require('../../images/bxl-whatsapp.png')} alt=""/>

            </div>
           
            <p>Forum</p>
          </div>

          <div className="col-md-3">
            <p>Join Our Newsletter</p>
            <p>
              Get exclusive news, features, and updates from The Shredder Weight
              Loss Academy.
            </p>
          </div>
        </div>
      </div>

      <small className="text-white d-flex justify-content-center pt-5 pb-3">©2020 Programming Hero. All Rights Reserved.</small>
    </div>
  );
};

export default Footer;
