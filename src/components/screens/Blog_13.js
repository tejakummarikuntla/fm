import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_13 from "../sections/Episodes/BreadCrumbEp_13";
import Ep_13 from "../sections/Episodes/Episode_13";
import Sidebar_13 from "../sections/Episodes/Sidebar_13";
import MyComment from "../sections/DisqusCom";
import { Helmet } from "react-helmet";

const Blogarea = () => {
  return (
    <>
      <Helmet>
        <title>
          Rathinamurthy R: On Disrupting The Way Developers Learn | Founding
          Crio.Do
        </title>{" "}
      </Helmet>
      <Navbar />
      <BlogBread_13 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_13 />
            <Sidebar_13 />
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
