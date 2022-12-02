import React from "react";

import Navbar from "../Common/Navbar/Navbar";
import Counter from "../Components/Counter/Counter";
import Hero from "../Components/Hero/Hero";
import Footer from "../Common/Footer/Footer";
import HereFor from "../Components/Here-For/HereFor";
import Clients from "../Components/Clients/Clients";
import WhyUs from "../Components/WhyUs/WhyUs";

import heroData from "../Data/HeroData";
import hereForData from "../Data/HereForData";

const About = () => {
  let item = heroData.find((i) => i.id === 2);
  let item2 = hereForData.find((i) => i.id === 2);

  return (
    <div>
      <Navbar />
      <Hero title={item.title} desc={item.desc} heroImg={item.img1} />
      <Counter />
      <HereFor
        heading={item2.heading}
        title={item2.title}
        hereForImg={item2.img1}
        desc={item2.desc}
        desc2={item2.desc2}
      />
      <WhyUs />
      <Clients />
      <Footer />
    </div>
  );
};

export default About;
