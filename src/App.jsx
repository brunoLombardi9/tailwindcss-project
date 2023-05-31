import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytycs from "./components/Analytycs";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytycs />
      <Newsletter/>
      <Plans/>
      <Footer/>
    </>
  );
};

export default App;
