import React from 'react'
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import HeroReview from '../components/HeroReview/HeroReview';
import GalleryPreview from '../components/GalleryPreview/GalleryPreview';
import PlansPreview from '../components/PlansPreview/PlansPreview';
import PeopleGrid from '../components/PeopleGrid/PeopleGrid';
import KnowledgeSection from '../components/KnowledgeSection/KnowldedgeSection';
import HeroAbout from '../components/HeroAbout/HeroAbout';


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
    </div>
    {/* <Companies /> */}
    {/* <Residencies/> */}
    {/* <PlansPreview/> */}
    <HeroAbout />
    <KnowledgeSection />
    {/* <HeroReview/> */}
    <Value/>
    {/* <GalleryPreview/> */}
    <PeopleGrid />
    {/* <Contact/> */}
    {/* <GetStarted/> */}
  </div>
  )
}

export default Website