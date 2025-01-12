import React from "react";
import peopleData from "../../utils/people";
import "./PeopleGrid.css";

const PeopleGrid = () => {
  return (
    <div className="people-grid-container">
      {/* Title Section */}
      <h2 className="grid-title">Meet Our Team</h2>

      {/* People Grid */}
      <div className="people-grid">
        {peopleData.slice(0, 8).map((person, index) => (
          <div key={index} className="person-card">
            <img className="people-image" src={person.picture} alt={person.name} />
            <p className="people-name">{person.name}</p>
            <p className="people-role">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleGrid;
