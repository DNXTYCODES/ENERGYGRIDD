import React from "react";
// import "./index.css"; // Global styles
import "./gallery.css"; // Additional styles for the gallery page

const Gallery = () => {
  const installations = [
    {
      id: 1,
      title: "Residential Installation",
      description: "Solar system designed for residential energy needs.",
      image: "install.jpg",
      details: "Installed a 5kW solar system for a 4-bedroom home in Lagos.",
    },
    {
      id: 2,
      title: "Commercial Installation",
      description: "Solar solutions for business sustainability.",
      image: "solargrid.jpg",
      details: "Set up a 20kW system for a shopping complex in Abuja.",
    },
    {
      id: 3,
      title: "Church Installation",
      description: "Uninterrupted power for religious services.",
      image: "church.jpeg",
      details: "Installed a 10kW solar system for a church in Port Harcourt.",
    },
    {
      id: 4,
      title: "Industrial Installation",
      description: "High-capacity systems for industrial needs.",
      image: "enterprise.jpeg",
      details: "Deployed a 50kW solar system for a factory in Kano.",
    },
    {
      id: 5,
      title: "School Installation",
      description: "Power solutions for educational institutions.",
      image: "solarlight.jpg",
      details: "Provided a 15kW system for a secondary school in Enugu.",
    },
    {
      id: 6,
      title: "Hospital Installation",
      description: "Reliable energy for healthcare facilities.",
      image: "solargrid.jpg",
      details: "Installed a 30kW solar system for a hospital in Ibadan.",
    },
  ];

  return (
    <section className="gallery paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">Solar Installations Gallery</h2>
        <p className="secondaryText">
          Explore our completed solar projects and how we've brought sustainable
          energy solutions to life.
        </p>
        <div className="gallery-grid">
          {installations.map((install) => (
            <div className="gallery-item" key={install.id}>
              <img
                src={install.image}
                alt={install.title}
                className="gallery-image"
              />
              <h3 className="orangeText">{install.title}</h3>
              <p className="secondaryText">{install.description}</p>
              <p className="detailsText">{install.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
