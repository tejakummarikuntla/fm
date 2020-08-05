import React from "react";
import Navbar from "../sections/Navbar";
import EpBreadCrumb from "../sections/AllBreadCrumb";
import Footer from "../sections/Footer";
import PodcastItem from "../sections/PodcastItem";
import { Helmet } from "react-helmet";

const Episodes = () => {
  return (
    <>
      <Helmet>
        <title>Exploiting | Episodes</title>{" "}
      </Helmet>
      <Navbar />
      <EpBreadCrumb />

      <PodcastItem />
      <Footer />
    </>
  );
};

export default Episodes;
