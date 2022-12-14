import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import ContactForms from "../Components/ContactForms/ContactForms";
import Hero from "../Components/Hero/Hero";

import heroData from "../Data/HeroData";

const ContactUs = () => {
  let item = heroData.find((i) => i.id === 5);

  return (
    <div>
      <Navbar />
      <Hero
        title={item.title}
        desc={item.desc}
        desc2={item.desc2}
        heroImg={item.img1}
      />
      <ContactForms />
      <Footer />
    </div>
  );
};

export default ContactUs;
