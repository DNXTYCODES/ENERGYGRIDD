import React, { useState } from "react";
import peopleData from "../../utils/people";
import "./People.css"

const People = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="people-page bg-white">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="left white">Our People</h1>
      </div>

      {/* Write-up Section */}
      <div className="writeup-section">
        <p className="people-text space-up-up-up">
          With a strong offering across the board, Bentsi-Enchill, Letsa &
          Ankomah appeals to clients due to its commendable abilities on both
          disputes and transactional mandates. The team is singled out in the
          market as a heavy hitter for corporate and commercial deals, as well
          as complex projects. A stalwart of the Ghanaian legal landscape, it is
          a firm of choice for international banks, financial institutions, and
          investment corporations.
        </p>
      </div>

      {/* Search Section */}
      <div className="search-section space-up-up-up">
        <input type="text" placeholder="Search by name, role..." />
        <button className="search-btn">🔍</button>
      </div>

      {/* People Grid */}
      <div className="people-grid space-up-up-up">
        {peopleData.slice(0, visibleCount).map((person, index) => (
          <div key={index} className="person-card">
            <img className="people-image" src={person.picture} alt={person.name} />
            <p className="people-name">{person.name}</p>
            <p className="people-role">{person.role}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < peopleData.length && (
        <div className="load-more-section">
          <button className="loadmore-button underline" onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default People;
