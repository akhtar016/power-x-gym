import React from "react";
import "./BankPayment.scss";

const BankPayment = () => {
  return (
    <div className="container">
      <form id="form-box">
        <div class="form-row">
            
          <div class="form-group col-md-6">
          <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
  <label class="form-check-label" for="exampleRadios1" className="font-weight-bold ml-3" id="credit-card-txt">
    Credit Card
  </label>
</div>
            
          </div>

          <div class="form-group col-md-6">
            <label for="last-name">Last Name</label>
            <input type="text" class="form-control" id="last-name" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BankPayment;
