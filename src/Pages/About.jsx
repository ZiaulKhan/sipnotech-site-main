import React from "react";

import Navbar from "../Common/Navbar/Navbar";
import Counter from "../Components/Counter/Counter";
import Hero from "../Components/Hero/Hero";
import Footer from "../Common/Footer/Footer";
import HereFor from "../Components/Here-For/HereFor";
import Clients from "../Components/Clients/Clients";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Help Companies Design Their Products" />
      <Counter />
      <HereFor />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
