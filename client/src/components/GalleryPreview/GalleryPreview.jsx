import React from "react";
// import "./index.css";
import "./GalleryPreview.css";

const GalleryPreview = () => {
  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      image: "Ace-Anan-Ankomah-1024x1024-1.png",
      role: "Managing Partner"
    },
    {
      id: 2,
      name: "Home Plan",
      image: "Frank-Nimako-Akowuah.png",
    },
    {
      id: 3,
      name: "Business Plan",
      image: "SBAK-Headshot-Square.png",
    },
    {
      id: 4,
      name: "Premium Plan",
      image:
        "AAG-NEW.png",
    },
    {
      id: 5,
      name: "Starter Plan",
      image: "Daad-Akwasi.png",
    },
    {
      id: 6,
      name: "Home Plan",
      image: "Frank-Nimako-Akowuah.png",
    },
    {
      id: 7,
      name: "Business Plan",
      image: "Golda-Denyo.png",
    },
    {
      id: 8,
      name: "Premium Plan",
      image:
        "Seyram-Dzikunu.png",
    },
  ];

  return (
    <section className="plans-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        
        <h2>Our People</h2>
        <div className="plans-grid space-up">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <img
                src={plan.image}
                alt={plan.name}
                className="plan-image"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              />
              <p
                className="paddings"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              >
                {" "}
                <a>{plan.name}</a>{" "}
              </p>
              {/* <p className="secondaryText">{plan.description}</p>
              <p className="powerCapacity">Power Capacity: {plan.powerCapacity}</p>
              <p className="duration">Estimated Duration: {plan.duration}</p> */}
              {/* <button
                className="buttonn"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              >
                Learn More
              </button> */}
            </div>
          ))}
        </div>
          <p className="right underline">
            <a href="/people">Visit our People Page</a>
          </p>
      </div>
    </section>
  );
};

export default GalleryPreview;
