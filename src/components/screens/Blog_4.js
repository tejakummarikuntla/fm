import React from "react";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import BlogBreadCrumb from "../sections/Episodes/BreadCrumbEp_4";
import Ep_4 from "../sections/Episodes/Episode_4";
import Sidebar from "../sections/Episodes/Sidebar_4";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>Ep4 : Luis Serrano </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBreadCrumb />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_4 />
            <Sidebar />
          </div>
          <MyComment />
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
};

export default Blogarea;
