import React from "react";
import { Link } from "react-router-dom";
import "./plansPage.css";

const plans = [
  {
    id: "1",
    name: "Starter Plan",
    description:
      "Ideal for small needs, such as charging phones and powering small lights.",
    image: "local.jpg",
    power: "500W",
    duration: "8-10 hours",
    price: "$500",
  },
  {
    id: "2",
    name: "Basic Plan",
    description: "Suitable for small households, powering fans, TVs, and more.",
    image: "install.jpg",
    power: "1kW",
    duration: "12-15 hours",
    price: "$1,200",
  },
  {
    id: "3",
    name: "Premium Plan",
    description:
      "Perfect for medium households or small offices with multiple appliances.",
    image: "localsolar.jpg",
    power: "2kW",
    duration: "18-20 hours",
    price: "$3,000",
  },
  {
    id: "4",
    name: "Enterprise Plan",
    description:
      "Designed for large households or offices with extensive energy needs.",
    image: "enterprise.jpeg",
    power: "5kW",
    duration: "24+ hours",
    price: "$7,500",
  },
  {
    id: "custom-plan",
    name: "Custom Plan",
    description:
      "Tailored solutions for specific needs. Contact us for more information.",
    image: "premiumsolar.jpg",
    power: "Varies",
    duration: "Varies",
    price: "Contact Us",
  },
];

const PlansPage = () => {
  return (
    <div className="plansPage wrapper paddings">
      <h2 className="primaryText">Our Solar Plans</h2>
      <p className="secondaryText">
        Explore our carefully designed solar plans that cater to different
        energy needs. Choose the one that fits your requirements.
      </p>
      <div className="plans-container flexColCenter">
        {plans.map((plan) => (
          <div className="plan-card flexColStart" key={plan.id}>
            <img src={plan.image} alt={plan.name} className="plan-image" />
            <h3 className="plan-title">{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-info">
              <p>
                <strong>Power:</strong> {plan.power}
              </p>
              <p>
                <strong>Duration:</strong> {plan.duration}
              </p>
              <p>
                <strong>Price:</strong> {plan.price}
              </p>
            </div>
            <Link to={`/plans/${plan.id}`} className="dppbutton">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;
