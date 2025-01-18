import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../../utils/serviceData";
import "./ServicePage.css";

const ServicePage = () => {
  const { serviceId } = useParams();
  const serviceData = services.find((item) => item.id === serviceId);

  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return (
    <div className="sp-expertise-service-page bg-white">
      {/* Hero Section */}
      <section
        className="sp-expertise-hero"
        style={{
          backgroundImage: `url(${serviceData.images})`,
        }}
      >
        <h1>{serviceData.title}</h1>
      </section>

      {/* Body Section */}
      <section className="sp-expertise-body">
        {/* Content Section */}
        <div className="sp-expertise-content">
          <p>{serviceData.description}</p>

          <h3>Our Capabilities Include</h3>
          <ul>
            {serviceData.expertiseCovered.map((expertise, index) => (
              <li key={index}>{expertise}</li>
            ))}
          </ul>

          <h3>Key Matters</h3>
          <ul>
            {serviceData.keyMatters.map((matter, index) => (
              <li key={index}>{matter}</li>
            ))}
          </ul>
        </div>

        {/* Author Section */}
        <div className="sp-expertise-author">
          <h3>Key Contacts</h3>
          <div className="sp-contact">
            <img
              src="/path-to-image/person1.jpg"
              alt="Person 1"
              className="sp-contact-image"
            />
            <p>
              <strong>Seth Asante</strong>
              <br />
              Managing Partner
            </p>
          </div>
          <div className="sp-contact">
            <img
              src="/path-to-image/person2.jpg"
              alt="Person 2"
              className="sp-contact-image"
            />
            <p>
              <strong>Seyram Dzikunu</strong>
              <br />
              Partner
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;










// import React from "react";
// import { useParams } from "react-router-dom";
// import { services } from "../../utils/serviceData";
// import "./ExpertiseServicePage.css";

// const ServicePage = () => {
//   const { serviceId } = useParams();
//   const serviceData = services.find((item) => item.id === serviceId);

//   if (!serviceData) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <div className="expertise-service-page">
//       {/* Hero Section */}
//       <section
//         className="expertise-hero"
//         style={{
//           backgroundImage: `url(${serviceData.images})`,
//         }}
//       >
//         <h1>{serviceData.title}</h1>
//       </section>

//       {/* Body Section */}
//       <section className="expertise-body">
//         {/* Content Section */}
//         <div className="expertise-content">
//           <p>{serviceData.description}</p>

//           <h3>Our Capabilities Include</h3>
//           <ul>
//             {serviceData.expertiseCovered.map((expertise, index) => (
//               <li key={index}>{expertise}</li>
//             ))}
//           </ul>

//           <h3>Key Matters</h3>
//           <ul>
//             {serviceData.keyMatters.map((matter, index) => (
//               <li key={index}>{matter}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Author Section */}
//         <div className="expertise-author">
//           <h3>Key Contacts</h3>
//           <div className="contact">
//             <img
//               src="/path-to-image/person1.jpg"
//               alt="Person 1"
//               className="contact-image"
//             />
//             <p>
//               <strong>Seth Asante</strong>
//               <br />
//               Managing Partner
//             </p>
//           </div>
//           <div className="contact">
//             <img
//               src="/path-to-image/person2.jpg"
//               alt="Person 2"
//               className="contact-image"
//             />
//             <p>
//               <strong>Seyram Dzikunu</strong>
//               <br />
//               Partner
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ServicePage;


















// import React from "react";
// import { useParams } from "react-router-dom";
// import { services } from "../../utils/serviceData";

// const ServicePage = () => {
//   const { serviceId } = useParams();
//   const serviceData = services.find((item) => item.id === serviceId);

//   if (!serviceData) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <div className="bg-white">
      
//       <section className="expertise-hero">
//         <h1>Our Expertise</h1>
//       </section>
//       <section className="service-hero">
//         <h1>{serviceData.title}</h1>
//       </section>

//       <section className="service-details">
//         <p>{serviceData.description}</p>
//         <h3>Expertise Covered</h3>
//         <ul>
//           {serviceData.expertiseCovered.map((expertise, index) => (
//             <li key={index}>{expertise}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default ServicePage;
















// import React from "react";
// import { useParams } from "react-router-dom";
// import { services } from "../../utils/serviceData";

// const ServicePage = () => {
//   const { serviceId } = useParams();
//   const serviceData = services.find((item) => item.id === serviceId);

//   if (!serviceData) {
//     return <div>Service not found</div>;
//   }

//   return (
//     <div>
//       <section className="service-hero">
//         <h1>{serviceData.title}</h1>
//       </section>

//       <section className="service-details">
//         <p>{serviceData.description}</p>
//         <h3>Expertise Covered</h3>
//         <ul>
//           {serviceData.expertiseCovered.map((expertise, index) => (
//             <li key={index}>{expertise}</li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default ServicePage;
