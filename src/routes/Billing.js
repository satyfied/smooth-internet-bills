import React, { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BillingForm from "../components/Billing";
import BillingImage from "../components/BillingImage";
import { useParams } from "react-router-dom";
import { PricingContext } from "../contexts/PricingContext";

const Billing = () => {
  const { plans } = useContext(PricingContext);
  let { pricingId } = useParams();
  // * getting plan based on id
  const plan = plans.find((plan) => plan.id === pricingId);
  return (
    <div>
      <NavBar />
      <BillingImage
        heading="PAYMET PLATFORM"
        text="Please fill in your payment details"
      />
      <BillingForm plan={plan} />
      <Footer />
    </div>
  );
};

export default Billing;
