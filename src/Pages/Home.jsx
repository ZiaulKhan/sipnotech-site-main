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

import heroData from "../Data/HeroData";
import hereForData from "../Data/HereForData";

const Home = () => {
  let item = heroData.find((i) => i.id === 1);

  let item2 = hereForData.find((i) => i.id === 1);

  return (
    <div>
      <Navbar />
      <Hero
        title={item.title}
        desc={item.desc}
        heroImg={item.img1}
        vector={item.img2}
        lace1={item.img3}
        lace2={item.img4}
        lace3={item.img5}
        discoverMoreBtn={item.discoverMoreBtn}
        getStartedBtn={item.getStartedBtn}
        watchVideo={item.watchVideo}
        playIcon={item.icon}
      />
      <Counter />
      <What_we_do />
      <HereFor
        heading={item2.heading}
        title={item2.title}
        hereForImg={item2.img1}
        lace={item2.img2}
        desc={item2.desc}
        desc2={item2.desc2}
        learnMoreBtn={item2.learnMoreBtn}
      />
      <Portfolio title="Our Portfolio" />
      <Reviews />
      <Get_to_work />
      <Footer />
    </div>
  );
};

export default Home;
