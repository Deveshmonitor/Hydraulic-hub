import React from "react";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Front from "./Front";
import Gallery from "./Gallery";
import Number from "./Number";
import Services from "./Services";
import Testomonial from "./Testomonial";

function Home() {
  return (
    <>
      <Navbar />
      <Front />
      <Services />
      <About />
      <Testomonial />
      <Contact />
      <Gallery />
      <Number />
      <Footer />
    </>
  );
}

export default Home;
