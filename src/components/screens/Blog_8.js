import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBread_8 from "../sections/Episodes/BreadCrumbEp_8";
import Ep_8 from "../sections/Episodes/Episode_8";
import Sidebar_8 from "../sections/Episodes/Sidebar_8";
import MyComment from "../sections/DisqusCom";

const Blogarea = () => {
  return (
    <>
      <Navbar />
      <BlogBread_8 />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_8 />
            <Sidebar_8 />
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
