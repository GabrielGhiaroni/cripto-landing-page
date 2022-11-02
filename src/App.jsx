import React from "react";
import Destaque from "./components/Destaque/Destaque";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import InscrevaSe from "./components/Inscreva-se/InscrevaSe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destaque />
      <InscrevaSe />
      <Footer />
    </div>
  );
}

export default App;
