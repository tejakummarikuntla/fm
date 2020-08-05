import React from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BlogBreadCrumb from "../sections/Episodes/BreadCrumbEp_2";
import Ep_2 from "../sections/Episodes/Episode_2";
import Sidebar from "../sections/Episodes/Sidebar_2";
import MyComment from "../sections/DisqusCom";

const Blogarea = () => {
  return (
    <>
      <Navbar />
      <BlogBreadCrumb />
      <br />
      <section classNameName="confer-blog-details-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-center">
            <Ep_2 />
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
