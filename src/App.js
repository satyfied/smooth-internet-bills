import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import Billing from "./routes/Billing";
import PricingContextProvider from "./contexts/PricingContext";
function App() {
  return (
    <PricingContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="Billing/:pricingId" element={<Billing />} />
      </Routes>
    </PricingContextProvider>
  );
}

export default App;
