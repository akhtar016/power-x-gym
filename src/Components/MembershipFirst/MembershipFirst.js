import React from "react";
import "./MembershipFirst.scss";
import { Link } from "react-router-dom";

const MembershipFirst = () => {

  return (
    <div className="container mt-5">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="first-name">First Name</label>
            <input type="text" class="form-control" id="first-name" />
          </div>

          <div class="form-group col-md-6">
            <label for="last-name">Last Name</label>
            <input type="text" class="form-control" id="last-name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="mobile-number">Mobile Number</label>
            <input type="text" class="form-control" id="mobile-number" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="date-of-birth">Date of Birth</label>
            <input class="form-control" type="date"  id="date-of-birth"/>
            
           
          </div>

          <div class="form-group col-md-6">
            <label for="gender">Gender</label>
            <select id="gender-state" class="form-control">
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Custom</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputAddress">Address line 1</label>
            <input type="text" class="form-control" id="address" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Country/Region</label>
            <input type="text" class="form-control" id="country" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" />
          </div>
          <div class="form-group col-md-6">
            <label for="postcode">Postcode</label>
            <input type="text" class="form-control" id="postcode" />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/payment"><button type="submit" id="my-btn">
            Next
          </button></Link>
        </div>
      </form>
    </div>
  );
};

export default MembershipFirst;
