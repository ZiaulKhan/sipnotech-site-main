import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Portfolio from "../Components/Portfolio/Portfolio";
import WorkTogether from "../Components/WorkTogether/WorkTogether";

import heroData from "../Data/HeroData";

const PortfolioPage = () => {
  let item = heroData.find((i) => i.id === 4);

  return (
    <div>
      <Navbar />
      <Hero
        title={item.title}
        desc={item.desc}
        desc2={item.desc2}
        heroImg={item.img1}
        vector={item.img2}
      />
      <Portfolio heading="Our Projects" title="Some of our finest work." />
      <WorkTogether />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
