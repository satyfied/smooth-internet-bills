import React, { useContext } from "react";
import "./pricing.css";
import { Link } from "react-router-dom";
import { PricingContext } from "../contexts/PricingContext";

export function convertToAmount(x) {
  return `₦${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
const Pricing = () => {
  const { plans } = useContext(PricingContext);
  return (
    <div className="pricing">
      <div className="card-container">
        {plans.map((pricing) => (
          <div className="card" key={pricing.id}>
            <h3>- {pricing.plan} -</h3>
            <span className="bar"></span>
            <p className="amount">{convertToAmount(pricing.price)}</p>
            <p>- {pricing.duration} Days -</p>
            <p>- {pricing.mbps}Mbps -</p>
            <p>- Featured -</p>
            <p>- Private Quarters -</p>
            <Link to={`/Billing/${pricing.id}`} className="btn btn-primary">
              PURCHASE
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
