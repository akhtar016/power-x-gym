import React from "react";
import "./AdvancedGym.scss";

const AdvancedGym = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={require("../../images/advanced-gym.jpg")}
            alt=""
          />
          <p className="text-body mt-4 mb-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, libero iure quos rem atque eius sint aliquid. Fuga
            explicabo, pariatur sunt harum consectetur quidem officiis veritatis
            quo? Cupiditate magni, nam consequatur sed accusamus reprehenderit
            similique? Distinctio exercitationem numquam alias eum vel,
            temporibus suscipit! Amet nesciunt maiores modi soluta possimus
            reprehenderit Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Officiis porro sed odio unde fuga quidem.
          </p>

          <div className="pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Having Slimmer Shapely Thighs
              </p>
            </label>
          </div>
          <div className="pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Getting Stronger Body
              </p>
            </label>
          </div>
          <div className="pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Increased Metabolism
              </p>
            </label>
          </div>
          <div className="pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Increased Muscular Endurance
              </p>
            </label>
          </div>
          <div className="pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Maximum Results in Less Time
              </p>
            </label>
          </div>
          <div className="mb-5 pt-2">
            <label className="checkbox">
              <input type="checkbox" checked="checked" />{" "}
              <p className="text-body font-weight-bold ml-2">
                Firm Hips and Tummy
              </p>
            </label>
          </div>
        </div>

        <div className="col-md-6 pt-3">
          <h1 className="text-uppercase text-body font-weight-bold mb-5">
            <span id="text2">Class</span> Schedule
          </h1>
          <div className="boxes">
            <div className="box">
              <h3 className="font-weight-bold">Monday</h3>
              <p id="text2" className="font-weight-bold">
                8:30 AM - 9:00 AM
              </p>
            </div>
            <div className="box">
              <h3 className="font-weight-bold">Tuesday</h3>
              <p id="text2" className="font-weight-bold">
                10:00 AM - 11:00 AM
              </p>
            </div>
            <div className="box">
              <h3 className="font-weight-bold">Wednesday</h3>
              <p id="text2" className="font-weight-bold">
                7:00 AM - 8:00 AM
              </p>
            </div>
            <div className="box">
              <h3 className="font-weight-bold">Thursday</h3>
              <p id="text2" className="font-weight-bold">
                5:00 PM - 6:00 PM
              </p>
            </div>
            <div className="box">
              <h3 className="font-weight-bold">Friday</h3>
              <p id="text2" className="font-weight-bold">
                6:00 AM - 7:00 AM
              </p>
            </div>
            <div className="box">
              <h3 className="font-weight-bold">Saturday</h3>
              <p id="text2" className="font-weight-bold">
                7:00 PM - 8:00 PM
              </p>
            </div>
          </div>

          <div className="">
            <h4>Join Us</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedGym;
