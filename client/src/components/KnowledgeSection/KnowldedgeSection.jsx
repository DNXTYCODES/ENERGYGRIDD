import React from "react";
// import "./index.css";
import "./KnowledgeSection.css";
import { expertise } from "../../utils/expertiseData";
import { Link } from "react-router-dom";

const KnowledgeSection = () => {
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
        
        <h2 className="tex">Our Practice Areas</h2>
        <div className="plans-grid space-up write-up">
                {expertise.map((item, index) => (
                  <Link to={`/expertise/${item.id}`}
                    key={item.id}
                    className={`expertise-item innerWidth flexColCenter ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="expertise-content write-up">
                      <p className="expertise-title write-up">{item.title}</p>
                      {/* <p>{item.about}</p> */}
                      {/* <Link to={`/expertise/${item.id}`} className="learn-more">
                        Learn More
                      </Link> */}
                    </div>
                  </Link>
                ))}
        </div>
          <p className="right underline write-up">
            <a href="/expertise">Visit our Experise Page</a>
          </p>
      </div>
    </section>
  );
};

export default KnowledgeSection;
