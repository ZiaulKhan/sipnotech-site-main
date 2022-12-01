import React from "react";

import Navbar from "../Common/Navbar/Navbar";
import Counter from "../Components/Counter/Counter";
import Get_to_work from "../Components/Get-to-work/Get-to-work";
import HereFor from "../Components/Here-For/HereFor";
import Hero from "../Components/Hero/Hero";
import Reviews from "../Components/Reviews/Reviews";
import Portfolio from "../Components/Portfolio/Portfolio";
import What_we_do from "../Components/What-we-do/What-we-do";
import Footer from "../Common/Footer/Footer";
import ContactForms from "../Components/ContactForms/ContactForms";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Best Marketing Digital Agency" />
      <Counter />
      <What_we_do />
      <HereFor />
      <Portfolio />
      <Reviews />
      <Get_to_work />
      <Footer />
    </div>
  );
};

export default Home;
