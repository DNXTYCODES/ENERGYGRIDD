import React from "react";
import { useParams } from "react-router-dom";
import { expertise } from "../../utils/expertiseData";
import mockData from "../../utils/publications";

const SingleExpertisePage = () => {
  const { expertiseId } = useParams();
  const expertiseData = expertise.find((item) => item.id === expertiseId);

  if (!expertiseData) {
    return <div>Expertise not found</div>;
  }

  // Fetch 3 random publications
  const randomPublications = mockData
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${expertiseData.image})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hero"
      >
        <h1>{expertiseData.title}</h1>
      </section>

      <section className="expertise-details">
        <div className="tabs">
          <button>About</button>
          <button>Experience</button>
        </div>
        <p>{expertiseData.description}</p>

        <h3>Key Matters</h3>
        <ul>
          {expertiseData.keyMatters.map((matter, index) => (
            <li key={index}>{matter}</li>
          ))}
        </ul>

        <details>
          <summary>Awards</summary>
          <ul>
            {expertiseData.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </details>

        <details>
          <summary>Services</summary>
          <ul>
            {expertiseData.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </details>
      </section>

      <section className="publications">
        <h3>Publications</h3>
        <div className="publications-grid">
          {randomPublications.map((publication) => (
            <div key={publication.id} className="publication-item">
              <h4>{publication.title}</h4>
              <p>{publication.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleExpertisePage;
