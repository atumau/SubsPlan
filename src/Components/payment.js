import React, { Component } from "react";
import "./Css/payment.css";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      cardNumber: "",
      expiry: "",
      cvv: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleConfirmPayment = () => {
    alert("Payment confirmed!");
  };

  render() {
    const { selectedPlan, plan, planPrice } = this.props;
    console.log("selectedPlan prop:", selectedPlan);
    console.log("plan prop:", plan);
    console.log("planPrice prop:", planPrice);
    return (
      <div className="App">
        <div className="payment-card w-100">
          <div className="row">
            <div className="col-md-6 pb-3">
              <div className="card-details">
                <h2>Complete Payment</h2>
                <form className="payment-form row">
                  <input
                    type="text"
                    className="payment-input"
                    id="card-number"
                    name="cardNumber"
                    value={this.state.cardNumber}
                    placeholder="Card Number"
                    onChange={this.handleInputChange}
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    className="payment-input"
                    id="expiry"
                    name="expiry"
                    value={this.state.expiry}
                    onChange={this.handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    className="payment-input"
                    id="cvv"
                    name="cvv"
                    placeholder="CVV"
                    value={this.state.cvv}
                    onChange={this.handleInputChange}
                    required
                  />
                  <br />
                  <br />
                </form>
                <button
                  type="button"
                  className="payment-confirm"
                  onClick={this.handleConfirmPayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="order-summary mt-2 py-5">
                <h2>Order Summary</h2>
                <p>Plan Name: {selectedPlan}</p>
                <p>Billing Cycle: {plan}</p>
                <p>Plan Price: {planPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
