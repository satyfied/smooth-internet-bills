import React, { useContext } from "react";
import { PricingContext } from "../contexts/PricingContext";
import { PaystackButton } from "react-paystack";

import "./billing.css";
import { convertToAmount } from "./Pricing";
import { Navigate } from "react-router-dom";
//import {Link} from 'react-router-dom'

const Duration = [
  { duration: 1, type: "Month" },
  { duration: 2, type: "Month" },
  { duration: 3, type: "Month" },
  { duration: 6, type: "Month" },
  { duration: 12, type: "Month" },
  { duration: 24, type: "Month" },
];

const Billing = ({ plan }) => {
  const [price, setPrice] = React.useState(plan.price);
  const [selectedMonth, setSelectedMonth] = React.useState(1);
  const [payer, setPayer] = React.useState({ email: "", fullName: "" });
  const [isEmpty, setIsEmpty] = React.useState(true);
  const config = {
    reference: new Date().getTime().toString(),
    email: payer.email,
    name: payer.fullName,
    amount: price * 100,
    metadata: {
      name: payer.fullName,
    },
    publicKey: "pk_test_e36c6be6faf41944fa43a86a0c71ae309006922f",
  };

  const handlePaystackSuccessAction = (reference) => {
    alert(`Transaction Completed! Reference ${reference}`);
    window.location.replace("https://smoothbroadband.com/");
  };
  const handlePaystackCloseAction = () => {
    console.clear();
  };

  const componentProps = {
    ...config,
    text: "Make Payment",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: () => handlePaystackCloseAction,
  };

  React.useEffect(() => {
    // ! this code is only updating bill component
    setPrice(plan.price * selectedMonth);
  }, [selectedMonth]);

  return (
    <div className="billing-container">
      <div className="billin-container-cta">
        <div className="billing-left">
          <div className="smoothscriber-detail">SmoothScriber Details</div>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              value={payer.fullName}
              onChange={(e) => setPayer({ fullName: e.target.value })}
            />
            <input
              type="email"
              name="email"
              placeholder="You Email"
              value={payer.email}
              onChange={(e) => setPayer({ email: e.target.value })}
              required
            />
          </form>
          <div className="info">
            <p>
              Please Note: SmoothScriber should see to carefully fill the above
              details correctly. All transactions are back logged.
            </p>
          </div>
        </div>
        <div className="billing-right">
          <div className="order"> Your Subscription</div>
          <div className="order-cta">
            <h3>Product</h3>
            <h3>Amount</h3>
            <p>
              {plan.plan}/{plan.mbps}Mbps
            </p>
            <p>{convertToAmount(price)}</p>
            <p>Plan Duration</p>
            <p>{plan.duration} Days</p>
            <h3>Total</h3>
            <h3>{convertToAmount(price)}</h3>
          </div>
          <div className="gateway-containter">
            <div>
              <label for="duration">Select payment duration:</label>
              <select
                className="duration"
                id="Duration"
                name="duration"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {Duration.map((duration, index) => (
                  <option value={duration.duration} key={index}>
                    {duration.duration} {duration.type}
                  </option>
                ))}
              </select>
              <br />
              <PaystackButton
                className={
                  payer.email === "" || payer.fullName === ""
                    ? "btn disabledBtn"
                    : "btn btn-primary"
                }
                {...componentProps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
