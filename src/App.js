import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactUs from "./Pages/ContactUs";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
