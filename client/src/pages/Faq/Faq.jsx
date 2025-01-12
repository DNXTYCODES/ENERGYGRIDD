import React, { useState } from "react";
import "./Faq.css";

const faqData = [
  {
    question: "What is solar energy, and how does it work?",
    answer:
      "Solar energy is the power obtained from sunlight. Solar panels capture sunlight and convert it into electricity using photovoltaic cells.",
  },
  {
    question: "Why should I switch to solar energy?",
    answer:
      "Switching to solar energy can save you money on electricity bills, reduce your carbon footprint, and provide energy independence.",
  },
  {
    question: "How much does a solar installation cost?",
    answer:
      "The cost depends on the size of the system and your energy needs. We provide customized estimates based on your requirements.",
  },
  {
    question: "How long does it take to install a solar system?",
    answer:
      "The installation typically takes 1-3 days, depending on the complexity of the project.",
  },
  {
    question: "What happens during cloudy days or at night?",
    answer:
      "During cloudy days or at night, the system relies on energy stored in batteries or the grid, if connected.",
  },
  {
    question: "How much maintenance does a solar system require?",
    answer:
      "Solar systems require minimal maintenance. Cleaning the panels and inspecting connections periodically is sufficient.",
  },
  {
    question: "Can I expand my solar system in the future?",
    answer:
      "Yes, most systems are designed to be expandable to accommodate future energy needs.",
  },
  {
    question: "What is the lifespan of a solar panel?",
    answer:
      "Most solar panels last 25-30 years, with minimal degradation in efficiency over time.",
  },
  {
    question: "Will solar work for my home or business?",
    answer:
      "Solar works for most homes and businesses. A site assessment will determine suitability based on sunlight exposure.",
  },
  {
    question: "Are there any warranties for the solar system?",
    answer:
      "Yes, we offer warranties for panels, inverters, and batteries. Contact us for detailed warranty information.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section wrapper paddings">
      <h2 className="primaryText">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
