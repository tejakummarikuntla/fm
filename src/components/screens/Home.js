import React from "react";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Podcast from "../sections/Podcast";
import Navbar from "../sections/Navbar";
import Testimonal from "../sections/Testimonals";
import CarouselPage from "../sections/ListnersTestimonials";
import Sponsors from "../sections/Sponsor";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting with Teja Kummarikuntla</title>{" "}
        <meta
          name="keywords"
          content="Exploiting, Exploit chat, exploit.chat, podcast, Exploiting with Teja Kummarikuntla"
        ></meta>
        <meta
          name="description"
          content="A Pocast initiative by Teja Kummarikuntla about sharing potential and purposeful exploits by various people in different situations in life, technology, business etc."
        ></meta>
      </Helmet>
      <Navbar />
      <About />
      <Podcast />

      <section
        class="testimonial text-center"
        style={{ backgroundColor: "#151853", textAlign: "center" }}
      >
        <Testimonal />
        <CarouselPage />
        <div className="container" style={{ backgroundColor: "#151853" }}>
          <Sponsors />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
