import React from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navbar";
import ContactForms from "../Components/ContactForms/ContactForms";
import Hero from "../Components/Hero/Hero";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Hero heading="Contact" />
      <ContactForms />
      <Footer />
    </div>
  );
};

export default ContactUs;
