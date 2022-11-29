import React from "react";
import "./App.css";
import Footer from "./Common/Footer/Footer";
import Navbar from "./Common/Navbar/Navbar";
import About from "./Components/About/About";
import Counter from "./Components/Counter/Counter";
import Get_to_work from "./Components/Get-to-work/Get-to-work";
import Hero from "./Components/Hero/Hero";
import Clients from "./Components/Our-clients/Our-clients";
import What_we_do from "./Components/What-we-do/What-we-do";
import Why from "./Components/Why-us/Why-us";
const App = () => {
  return (
    <div>
      <Navbar /> {/*  Done  */}
      <Hero /> {/*  Done  */}
      <Counter /> {/*  Done  */}
      <What_we_do />
      <About /> {/*  Done  */}
      <Why />
      <Clients /> {/*  Done  */}
      <Get_to_work />
      <Footer /> {/*  Done  */}
    </div>
  );
};

export default App;
