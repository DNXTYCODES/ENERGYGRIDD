import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [activePage, setActivePage] = useState(0);

  // Array of page contents
  const pagesContent = [
    {
      header: "About Us",
      content: "Bentsi-Enchill, Letsa & Ankomah was founded in 1990 to provide excellent legal services. Over the years, we have built a reputation for handling the most complex transactions and disputes for foreign investors, local companies, statutory entities, and the government."
    },
    {
      header: "History",
      content: "Over the years, we have built a reputation for handling the most complex transactions. We’ve been a pillar of legal excellence and have shaped the industry through our innovative approaches."
    },
    {
      header: "Community",
      content: "Our firm is committed to community initiatives that enhance the legal and social systems. We take pride in contributing to the development of the communities we serve, making a meaningful impact."
    },
    {
      header: "Rankings",
      content: "We have been ranked among the top law firms globally, recognized for our excellence and innovation. Our rankings highlight our dedication to delivering outstanding legal services."
    }
  ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Us</h1>
      </div>

      {/* Body Section */}
      <div className="body-section">
        {/* Left Section with Pages */}
        <div className="left-section">
          <div className="headers">
            {pagesContent.map((page, index) => (
              <button
                key={index}
                className={`header ${activePage === index ? "active" : ""}`}
                onClick={() => setActivePage(index)}
              >
                {page.header}
              </button>
            ))}
          </div>
          <div className="page-content">
            <p>{pagesContent[activePage].content}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Download Our Firm Brochure</h2>
          <button className="download-button">Download</button>
        </div>
      </div>
    </div>
  );
};

export default About;
