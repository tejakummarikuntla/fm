import React from "react";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Podcast from "../sections/Podcast";
import Navbar from "../sections/Navbar";
import Testimonal from "../sections/Testimonals";
import CarouselPage from "../sections/ListnersTestimonials";
import Sponsors from "../sections/Sponsors";
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

      <section
        class="testimonial text-center"
        style={{ backgroundColor: "#151853", textAlign: "center" }}
      >
        <div className="container">
          <Sponsors />
        </div>
        <Testimonal />
        <CarouselPage />
      </section>
      <Footer />
    </>
  );
};

export default Home;
