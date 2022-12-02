import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import OurOffering from "../Components/OurOffering/OurOffering";
import What_we_do from "../Components/What-we-do/What-we-do";

import heroData from "../Data/HeroData";

const Services = () => {
  let item = heroData.find((i) => i.id === 3);

  return (
    <div>
      <Navbar />
      <Hero
        title={item.title}
        desc={item.desc}
        heroImg={item.img1}
        vector={item.img2}
      />
      <What_we_do />
      <OurOffering />
      <Footer />
    </div>
  );
};

export default Services;
