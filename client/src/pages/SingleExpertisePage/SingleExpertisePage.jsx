import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { expertise } from "../../utils/expertiseData";
import mockData from "../../utils/publications";
import "./SingleExpertisePage.css"

const SingleExpertisePage = () => {
  const { expertiseId } = useParams();
  const expertiseData = expertise.find((item) => item.id === expertiseId);

  const [activeTab, setActiveTab] = useState("about"); // State to track the active tab

  if (!expertiseData) {
    return <div>Expertise not found</div>;
  }

  // Fetch 3 random publications
  const randomPublications = mockData
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${expertiseData.image})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>{expertiseData.title}</h1>
      </section>

      {/* Expertise Details Section */}
      <section style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
        {/* Tabs for About and Experience */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <button
            style={{
              padding: "0.5rem 1rem",
              background: activeTab === "about" ? "#ffffff" : "#ffffff",
              color: activeTab === "about" ? "#ffd700" : "#000",
              border: "none",
              // borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            style={{
              padding: "0.5rem 1rem",
              background: activeTab === "experience" ? "#ffffff" : "#ffffff",
              color: activeTab === "experience" ? "#ffd700" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
        </div>

        {/* Conditional Rendering of About and Experience Content */}
        {activeTab === "about" && (
          <div>
            <p>{expertiseData.description}</p>

            <h3>Key Matters</h3>
            <ul>
              {expertiseData.keyMatters.map((matter, index) => (
                <li style={{listStyle: "none"}} key={index}>{matter}</li>
              ))}
            </ul>

            <details>
              <summary>Awards</summary>
              <ul>
                {expertiseData.awards.map((award, index) => (
                  <li style={{listStyle: "none"}} key={index}>{award}</li>
                ))}
              </ul>
            </details>

            <details>
              <summary>Services</summary>
              <ul>
                {expertiseData.services.map((service, index) => (
                  <li style={{listStyle: "none"}} key={index}>{service}</li>
                ))}
              </ul>
            </details>
          </div>
        )}

        {activeTab === "experience" && (
          <div>
            <h3>Experience</h3>
            <ul>
              {expertiseData.experience.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Publications Section */}
      <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Publications</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {randomPublications.map((publication) => (
            <div
              key={publication.id}
              style={{
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "0.5rem",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={publication.image}
                alt={publication.title}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "0.5rem",
                }}
              />
              <h4
                style={{
                  fontSize: "0.9rem",
                  color: "#333",
                  fontWeight: "bold",
                  margin: "0.5rem 0 0",
                }}
              >
                {publication.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleExpertisePage;


















// import React from "react";
// import { useParams } from "react-router-dom";
// import { expertise } from "../../utils/expertiseData";
// import mockData from "../../utils/publications";

// const SingleExpertisePage = () => {
//   const { expertiseId } = useParams();
//   const expertiseData = expertise.find((item) => item.id === expertiseId);

//   if (!expertiseData) {
//     return <div>Expertise not found</div>;
//   }

//   // Fetch 3 random publications
//   const randomPublications = mockData
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3);

//   return (
//     <div style={{ backgroundColor: "#fff" }}>
//       {/* Hero Section */}
//       <section
//         style={{
//           backgroundImage: `url(${expertiseData.image})`,
//           height: "300px",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <h1>{expertiseData.title}</h1>
//       </section>

//       {/* Expertise Details Section */}
//       <section style={{ padding: "2rem", maxWidth: "1200px", margin: "auto" }}>
//         <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
//           <button>About</button>
//           <button>Experience</button>
//         </div>
//         <p>{expertiseData.description}</p>

//         <h3>Key Matters</h3>
//         <ul>
//           {expertiseData.keyMatters.map((matter, index) => (
//             <li key={index}>{matter}</li>
//           ))}
//         </ul>

//         <details>
//           <summary>Awards</summary>
//           <ul>
//             {expertiseData.awards.map((award, index) => (
//               <li key={index}>{award}</li>
//             ))}
//           </ul>
//         </details>

//         <details>
//           <summary>Services</summary>
//           <ul>
//             {expertiseData.services.map((service, index) => (
//               <li key={index}>{service}</li>
//             ))}
//           </ul>
//         </details>
//       </section>

//       {/* Publications Section */}
//       <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
//         <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Publications</h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
//             gap: "1rem",
//             marginTop: "1rem",
//           }}
//         >
//           {randomPublications.map((publication) => (
//             <div
//               key={publication.id}
//               style={{
//                 background: "#fff",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 padding: "0.5rem",
//                 textAlign: "center",
//                 boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
//               }}
//             >
//               <img
//                 src={publication.image}
//                 alt={publication.title}
//                 style={{
//                   width: "100%",
//                   height: "100px",
//                   objectFit: "cover",
//                   borderRadius: "5px",
//                   marginBottom: "0.5rem",
//                 }}
//               />
//               <h4
//                 style={{
//                   fontSize: "0.9rem",
//                   color: "#333",
//                   fontWeight: "bold",
//                   margin: "0.5rem 0 0",
//                 }}
//               >
//                 {publication.title}
//               </h4>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SingleExpertisePage;















// import React from "react";
// import { useParams } from "react-router-dom";
// import { expertise } from "../../utils/expertiseData";
// import mockData from "../../utils/publications";

// const SingleExpertisePage = () => {
//   const { expertiseId } = useParams();
//   const expertiseData = expertise.find((item) => item.id === expertiseId);

//   if (!expertiseData) {
//     return <div>Expertise not found</div>;
//   }

//   // Fetch 3 random publications
//   const randomPublications = mockData
//     .sort(() => 0.5 - Math.random())
//     .slice(0, 3);

//   return (
//     <div className="bg-white">
//       <section
//         style={{
//           backgroundImage: `url(${expertiseData.image})`,
//           height: "300px",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="hero"
//       >
//         <h1>{expertiseData.title}</h1>
//       </section>

//       <section className="expertise-details bg-white paddings innerWidth wrapper">
//         <div className="tabs">
//           <button>About</button>
//           <button>Experience</button>
//         </div>
//         <p>{expertiseData.description}</p>

//         <h3>Key Matters</h3>
//         <ul>
//           {expertiseData.keyMatters.map((matter, index) => (
//             <li key={index}>{matter}</li>
//           ))}
//         </ul>

//         <details>
//           <summary>Awards</summary>
//           <ul>
//             {expertiseData.awards.map((award, index) => (
//               <li key={index}>{award}</li>
//             ))}
//           </ul>
//         </details>

//         <details>
//           <summary>Services</summary>
//           <ul>
//             {expertiseData.services.map((service, index) => (
//               <li key={index}>{service}</li>
//             ))}
//           </ul>
//         </details>
//       </section>

//       <section className="publications">
//         <h3>Publications</h3>
//         <div className="publications-grid">
//           {randomPublications.map((publication) => (
//             <div key={publication.id} className="publication-item">
//               <img src={publication.image} alt="" style={{width: "10rem"}}/>
//               <h4 className="rpt write-up">{publication.title}</h4>
//               {/* <p>{publication.description}</p> */}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SingleExpertisePage;
