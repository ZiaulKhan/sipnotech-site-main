import React from "react";
import "./App.css";
import Footer from "./Common/Footer/Footer";
import Navbar from "./Common/Navbar/Navbar";
import About from "./Components/About/About";
import Counter from "./Components/Counter/Counter";
import Hero from "./Components/Hero/Hero";
import Clients from "./Components/Our-clients/Our-clients";
import Why from "./Components/Why-us/Why-us";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Counter />
      <About />
      <Why />
      <Clients />
      <Footer />
    </div>
  );
};

export default App;
