// Reviews.jsx
import React from "react";
import "./HeroReview.css";

const reviews = [
  {
    name: "John Doe",
    review:
      "Switching to solar has been the best decision for my family. This company provided an affordable and reliable solution. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mary Smith",
    review:
      "Their service was professional and the website made the process seamless. I’m saving a lot on electricity bills now.",
    rating: 4.5,
  },
  {
    name: "Ahmed Musa",
    review:
      "Great customer service and excellent solar installation. I appreciate their attention to detail and dedication.",
    rating: 5,
  },
];

const HeroReview = () => {
  return (
    <div className="reviews-wrapper paddings flexColCenter">
          <span className="orangeText">Reviews</span>
      <h2 className="primaryText">What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{item.review}"</p>
            <h4 className="reviewer-name">{item.name}</h4>
            <p className="review-rating">Rating: {item.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroReview;
