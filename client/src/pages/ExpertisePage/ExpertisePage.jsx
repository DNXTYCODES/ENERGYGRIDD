import React from "react";
import { expertise, services } from "../../utils/expertiseData";
import "./ExpertisePage.css";
import { Link } from "react-router-dom";

const ExpertisePage = () => {
  return (
    <div className="expertise-page container innerWidth">
      {/* Hero Section */}
      <section className="expertise-hero">
        <h1>Our Expertise</h1>
      </section>

      {/* About Section */}
      <section className="about">
        <div>
          <h4 className="practice space-up left section-header">Our Practice Areas</h4>
          <div className="practice-text space-up left">
            A leading group across various practice areas, we bring years of
            experience handling pivotal transactions and disputes across
            industries. blah blah blah . matthewcodez, dnxtcodez, practica area text, 
            talking about what this organisation dooes and services they offer, 
            this is a site to show the full catalogue of all the services they offer and the professionals/associates/staff 
            that are incharthe of each of these fields of work. once again, blah blah, lorem ipsum dolor,
            inumina patri, santi.... each staff's social handles(linkedin, instagram, facebook,email will be in the employees/people page)
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-grid">
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
      </section>

      {/* Services Section */}
      <section className="services">
        <p className="section-header space-up-up-up">Our Other Services</p>
        <div className="services-grid space-up-up">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <Link
                to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {service}
              </Link>
              <div className="service-right-arrow">&gt;</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;

// import React from "react";
// import styles from "./ExpertisePage.module.css";
// import { expertise, services } from "../../utils/expertiseData";
// import { Link } from "react-router-dom";

// const ExpertisePage = () => {
//   return (
//     <div className={styles.expertisePage}>
//       {/* Hero Section */}
//       <section className={styles.heroSection}>
//         <h1>Our Expertise</h1>
//       </section>

//       {/* About Section */}
//       <section className={styles.aboutSection}>
//         <p>
//           We specialize in delivering exceptional solutions across architecture, design, and planning. Our expertise ensures high-quality, innovative, and sustainable services.
//         </p>
//       </section>

//       {/* Expertise Section */}
//       <section className={styles.expertiseSection}>
//         <h2>Top Expertise</h2>
//         <div className={styles.gridContainer}>
//           {expertise.map((item) => (
//             <div key={item.id} className={styles.gridItem}>
//               <img src={item.image} alt={item.title} />
//               <h3>{item.title}</h3>
//               <p>{item.about}</p>
//               <span>{item.experience}</span>
//               <Link to={`/expertise/${item.id}`}>Learn More</Link>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Other Services Section */}
//       <section className={styles.servicesSection}>
//         <h2>Our Other Services</h2>
//         <div className={styles.servicesContainer}>
//           <div className={styles.serviceColumn}>
//             {services.slice(0, 5).map((service) => (
//               <Link key={service.id} to={service.link}>
//                 {service.title}
//               </Link>
//             ))}
//           </div>
//           <div className={styles.serviceColumn}>
//             {services.slice(5).map((service) => (
//               <Link key={service.id} to={service.link}>
//                 {service.title}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ExpertisePage;
