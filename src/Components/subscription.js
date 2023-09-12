import React, { useState } from "react";

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <h2>Subscription</h2>
    </div>
  );
}

export default Subscription;
