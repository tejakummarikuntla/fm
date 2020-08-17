import React from "react";

const Team = () => {
  return (
    <>
      <section
        class="breadcrumb-area bg-img bg-gradient-overlay jarallax"
        id="breadcrumb-area"
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-12">
              <div class="breadcrumb-content">
                <h2 class="page-title">Team</h2>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      team
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="our-speaker-area section-padding-100">
        <h2 style={{ textAlign: "center" }}>We're Cute!</h2>
        <h6 style={{ textAlign: "center" }}>BEHIND THE SCENES</h6>
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-4">
              <div
                class="single-speaker-area bg-gradient-overlay-2 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div class="speaker-single-thumb">
                  <img src="img/gif/teja.gif" alt="" />
                </div>
                <div class="social-info">
                  <a
                    href="https://www.instagram.com/tejakummarikuntla"
                    target="_blank"
                  >
                    <i class="zmdi zmdi-instagram"></i>
                  </a>
                  <a href="https://www.twitter.com/tejakkuntla" target="_blank">
                    <i class="zmdi zmdi-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tejakummarikuntla"
                    target="_blank"
                  >
                    <i class="zmdi zmdi-linkedin"></i>
                  </a>
                  <a
                    href="https://www.github.com/tejakummarikuntla"
                    target="_blank"
                  >
                    <i class="zmdi zmdi-github"></i>
                  </a>
                </div>
                <div class="speaker-info">
                  <h5>Teja Kummarikuntla</h5>
                  <p>Host</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;