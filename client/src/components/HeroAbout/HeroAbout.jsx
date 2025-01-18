import React from "react";
import "./HeroAbout.css"
import { Link } from "react-router-dom";

const HeroAbout = () => {
  return (
    <section className="wrapper innerWidth flexColStart paddings">
      <h2>
        About Us
      </h2>
      <div>
        <p>Bentsi-Enchill, Letsa & Ankomah is a leading full-service law firm in Ghana with in-depth expertise and experience in providing first-rate legal services for international and local clients in all sectors of the economy.</p>
        <p>We are well-recognised for our leadership and stand out for providing commercially relevant legal services and innovative solutions to our clients. </p>
        <p>What drives us is our long-term commitment to providing legal services with the highest level of professionalism and quality, as well as building our teams to help our clients succeed and take advantage of the right opportunities.</p>
      </div>
      <a href="/about">view our About-Us Page</a>
    </section>

  )
}

export default HeroAbout;