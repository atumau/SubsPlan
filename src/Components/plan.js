import React, { useState } from "react";
import "./Css/plan.css";
import { Link } from "react-router-dom";
import Payment from "./payment";

function PricingToggle() {
  const [plan, setPlan] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(null);

  const planData = {
    mobile: {
      name: "Mobile",
      price: plan === "monthly" ? "₹100/month" : "₹1000/year",
      videoQuality: "Good",
      resolution: "480p",
      devices: "Phone/Tablet",
    },
    basic: {
      name: "Basic",
      price: plan === "monthly" ? "₹200/month" : "₹2000/year",
      videoQuality: "Good",
      resolution: "480p",
      devices: "Phone/Tablet/Computer/TV",
    },
    standard: {
      name: "Standard",
      price: plan === "monthly" ? "₹300/month" : "₹3000/year",
      videoQuality: "Better",
      resolution: "1080p",
      devices: "Phone/Tablet/Computer/TV",
    },
    premium: {
      name: "Premium",
      price: plan === "monthly" ? "₹400/month" : "₹4000/year",
      videoQuality: "Best",
      resolution: "4K+HDR",
      devices: "Phone/Tablet/Computer/TV",
    },
  };

  const handleToggle = () => {
    setPlan(plan === "monthly" ? "yearly" : "monthly");
    setSelectedPlan(null);
    setShowNextButton(false);
  };

  const handlePlanSelect = (selectedPlan) => {
    setSelectedPlan(selectedPlan);
    setShowNextButton(true);

    const selectedPlanData = planData[selectedPlan];

    setSelectedPlanData(selectedPlanData);
  };

  const handleNextClick = () => {
    console.log(`Selected plan: ${selectedPlan}, Billing period: ${plan}`);
    console.log("Selected plan data:", selectedPlanData);
  };

  return (
    <>
      <h2 className="text-center">Choose the right plan for you</h2>
      <div className="pricing-container">
        <div className="toggle">
          <button
            className={`toggle-button ${plan === "monthly" ? "active" : ""}`}
            onClick={handleToggle}
          >
            Monthly
          </button>
          <button
            className={`toggle-button ${plan === "yearly" ? "active" : ""}`}
            onClick={handleToggle}
          >
            Yearly
          </button>
        </div>

        <div className="features">
          <div
            className={`feature card-bg mobile ${
              selectedPlan === "mobile" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("mobile")}
          >
            <h2>Mobile</h2>
            <p>{planData.mobile.price}</p>
            <p>Video Quality: {planData.mobile.videoQuality}</p>
            <p>Resolution: {planData.mobile.resolution}</p>
            <p>Device: {planData.mobile.devices}</p>
          </div>
          <div
            className={`feature card-bg basic ${
              selectedPlan === "basic" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("basic")}
          >
            <h2>Basic</h2>
            <p>{planData.basic.price}</p>
            <p>Video Quality: {planData.basic.videoQuality}</p>
            <p>Resolution: {planData.basic.resolution}</p>
            <p>Device: {planData.basic.devices}</p>
          </div>
          <div
            className={`feature card-bg standard ${
              selectedPlan === "standard" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("standard")}
          >
            <h2>Standard</h2>
            <p>{planData.standard.price}</p>
            <p>Video Quality: {planData.standard.videoQuality}</p>
            <p>Resolution: {planData.standard.resolution}</p>
            <p>Device: {planData.standard.devices}</p>
          </div>
          <div
            className={`feature card-bg premium ${
              selectedPlan === "premium" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("premium")}
          >
            <h2>Premium</h2>
            <p>{planData.premium.price}</p>
            <p>Video Quality: {planData.premium.videoQuality}</p>
            <p>Resolution: {planData.premium.resolution}</p>
            <p>Device: {planData.premium.devices}</p>
          </div>
        </div>

        {selectedPlan && (
          <Link to={"/payment"}>
            <button
              className="next-button btn btn-primary w-50 mt-4"
              onClick={handleNextClick}
            >
              Next
            </button>
          </Link>
        )}
      </div>
    </>
  );
}

export default PricingToggle;
