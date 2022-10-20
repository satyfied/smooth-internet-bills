import React, { createContext } from "react";
import { nanoid } from "nanoid";

export const PricingContext = createContext();

const PricingContextProvider = (props) => {
  const [plans, setPlans] = React.useState([
    { plan: "Basic", mbps: 1.5, duration: 30, id: nanoid(), price: 16000 },
    { plan: "Suite", mbps: 2, duration: 30, id: nanoid(), price: 23000 },
    { plan: "Emerald", mbps: 3, duration: 30, id: nanoid(), price: 39000 },
    { plan: "Urel", mbps: 5, duration: 30, id: nanoid(), price: 59000 },
    { plan: "Prime", mbps: 7, duration: 30, id: nanoid(), price: 78000 },
    { plan: "Executive", mbps: 10, duration: 30, id: nanoid(), price: 110000 },
  ]);
  const [activeId, setActiveId] = React.useState("");
  return (
    <PricingContext.Provider value={{ plans, setPlans, activeId, setActiveId }}>
      {props.children}
    </PricingContext.Provider>
  );
};
export default PricingContextProvider;
