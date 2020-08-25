import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_10 from "../sections/Episodes/BreadCrumbEp_10";
import Ep_10 from "../sections/Episodes/Episode_10";
import Sidebar_10 from "../sections/Episodes/Sidebar_10";
import MyComment from "../sections/DisqusCom";

const Blogarea = () => {
  return (
    <>
      <Navbar />
      <BlogBread_10 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_10 />
            <Sidebar_10 />
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
