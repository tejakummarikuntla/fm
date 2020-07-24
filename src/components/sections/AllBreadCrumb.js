import React from "react";
// import bgimg from "img/Podcast/Exploiting_lowangle_banner.png";
// style={{
//   backgroundImage: `url (${bgimg})`,
// }}

const BreadCrumb = () => {
  return (
    <section
      class="breadcrumb-area bg-img bg-gradient-overlay jarallax"
      id="breadcrumb-area"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="page-title">All Episodes</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="./podcast.html">Podcast</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Episodes
                  </li>
                </ol>
              </nav>
              <a
                class="blog-title"
                style={{ color: "white", fontSize: "large" }}
              >
                Exploiting with Teja Kummarikuntla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
