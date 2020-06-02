import React from "react";
import "./BankPayment.scss";

const BankPayment = () => {
  return (
    <div className="container">
      <form id="form-box">
        <div class="form-row">
          <div class="form-group col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label
                class="form-check-label"
                for="exampleRadios1"
                className="font-weight-bold ml-3"
                id="credit-card-txt"
              >
                Credit Card
              </label>
            </div>
          </div>

          <div class="form-group col-md-6 d-flex justify-content-end">
            <img
              className="p-1"
              src={require("../../images/credit-cards_mastercard.png")}
              alt=""
            />
            <img
              className="p-1"
              src={require("../../images/credit-cards_visa.png")}
              alt=""
            />
            <img
              className="p-1"
              src={require("../../images/credit-cards_amex.png")}
              alt=""
            />
          </div>
        </div>

        <div class="form-group" id="border-box-margin">
          <label for="card-number" className="text-uppercase">Card Number</label>
          <input
            type="text"
            class="form-control"
            id="card-number"
            placeholder="0000 0000 0000 0000"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
          <label for="name-on-card" className="text-uppercase">Name on card</label>
          <input
            type="text"
            class="form-control"
            id="name-on-card"
          />
           
          </div>
          <div class="form-group col-md-3">
          <label for="expiry-date" className="text-uppercase">Expiry date</label>
          <input
            type="text"
            class="form-control"
            id="expiry-date"
            placeholder=" MM / YY "
          />
           
          </div>
          <div class="form-group col-md-3">
          <label for="cvv-code" className="text-uppercase">Cvv code</label>
          <input
            type="text"
            class="form-control"
            id="cvv-code"
          />
           
          </div>
        </div>
      </form>



      <form id="form-box">
        <div class="form-row">
          <div class="form-group col-md-6">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label
                class="form-check-label"
                for="exampleRadios1"
                className="font-weight-bold ml-3"
                id="credit-card-txt"
              >
                PayPal
              </label>
              <p className="text-body">You will be redirected to PayPal website to complete your purchase securely</p>
            </div>
          </div>

          <div class="form-group col-md-6 d-flex justify-content-end">
            <img
              className="p-1"
              src={require("../../images/paypal.png")}
              alt=""
              width="max-content"
              height="max-content"
            />
         
          </div>
        </div>
        </form>

        <div className="d-flex justify-content-end">
          <button type="submit" id="my-btn" className="mr-5">
            Next
          </button>
        </div>


    </div>
  );
};

export default BankPayment;
