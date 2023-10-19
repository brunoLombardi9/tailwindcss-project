import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter/>
      <Plans/>
      <Footer/>
    </>
  );
};

export default App;
