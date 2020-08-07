import React from "react";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Podcast from "../sections/Podcast";
import Navbar from "../sections/Navbar";
import Contact from "../sections/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting with Teja Kummarikuntla</title>{" "}
      </Helmet>
      <Navbar />
      <About />
      <Podcast />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
