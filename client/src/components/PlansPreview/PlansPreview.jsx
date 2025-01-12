import React from "react";
// import "./index.css";
import "./PlansPreview.css";
import { expertise } from "../../utils/expertiseData";

const PlansPreview = () => {
  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      image: "cc3-1024x640-1.png",
    },
    {
      id: 2,
      name: "Home Plan",
      image: "ficm-1024x640-1.png",
    },
    {
      id: 3,
      name: "Business Plan",
      image: "ei-1024x640-1.png",
    },
    {
      id: 4,
      name: "Premium Plan",
      image:
        "Dispute-resolution-practices-progressing-across-the-continent-Publication-1024x640-1.png",
    },
  ];

  return (
    <section className="plans-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        
        <h2>Our Practice Areas</h2>
        <div className="plans-grid space-up">
                {expertise.map((item, index) => (
                  <div
                    key={item.id}
                    className={`expertise-item innerWidth flexColCenter ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="expertise-content">
                      <p className="expertise-title">{item.title}</p>
                      {/* <p>{item.about}</p> */}
                      {/* <Link to={`/expertise/${item.id}`} className="learn-more">
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                ))}
        </div>
          <p className="right underline">
            <a href="/expertise">Visit our Experise Page</a>
          </p>
      </div>
    </section>
  );
};

export default PlansPreview;
