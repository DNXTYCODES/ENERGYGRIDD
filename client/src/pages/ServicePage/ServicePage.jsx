import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../utils/serviceData";

const ServicePage = () => {
  const { serviceId } = useParams();
  const serviceData = services.find((item) => item.id === serviceId);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <section className="service-hero">
        <h1>{serviceData.title}</h1>
      </section>

      <section className="service-details">
        <p>{serviceData.description}</p>
        <h3>Expertise Covered</h3>
        <ul>
          {serviceData.expertiseCovered.map((expertise, index) => (
            <li key={index}>{expertise}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ServicePage;
