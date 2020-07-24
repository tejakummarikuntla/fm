import React from "react";
// style={{ backgroundImage: "url(img/Podcast/Exploiting_v2.png)" }}
// <img src="img/Podcast/Exploiting_v2.png" alt="" />

const Podcast = () => {
  return (
    <>
      <a name="podcast"></a>
      <section
        className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60"
        id="our-blog-area"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading text-center wow fadeInUp"
                data-wow-delay="300ms"
              >
                <p>Latest</p>
                <h4>Episodes</h4>
              </div>
            </div>

            <div className="single-blog-area wow fadeInUp">
              <div className="card" data-wow-delay="300ms">
                <div className="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/2CITL9oJJYtJVSIDR22VNr"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div className="single-blog-text text-center">
                    <a className="blog-title">
                      Luis Serrano: On Unlocking The Intuition Behind Math and
                      Machine Learning
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> July 6, 2020
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/luisgserrano/"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> Luis Serrano
                      </a>
                    </div>
                    <p className="card-text text-center">
                      On this episode, I got a chance to speak with Luis about
                      how unlocking the intuition behind mathematics and machine
                      learning could impact your thinking and thought process of
                      approaching any problem. Intense passion towards teaching
                      resulted in authoring “Grokking Machine Learning” where
                      someone can understand and teach Machine Learning with
                      only stories..
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a href="/blog" target="_blank">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="single-blog-area wow fadeInUp">
              <div className="card" data-wow-delay="300ms">
                <div className="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/5RbgqW4hHQTqClSP8xzrOr"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div className="single-blog-text text-center">
                    <a className="blog-title">
                      Balamurugan SP: On Transforming Vernacular Learning for 6
                      Years
                    </a>
                    <div className="post-meta">
                      <a className="post-date">
                        <i className="zmdi zmdi-alarm-check"></i> June 29, 2020
                      </a>
                      <a
                        className="post-author"
                        href="https://www.linkedin.com/in/spbalamurugan1"
                        target="_blank"
                      >
                        <i className="zmdi zmdi-account"></i> S P Balamurugan
                      </a>
                    </div>
                    <p className="card-text text-center">
                      How does vernacular learning can transform the learning
                      styles that could be more powerful and transparent? On
                      Guvi’s 6th anniversary, Balamurugan and I spoke about the
                      tremendous impact of Guvi that was created in the past 6
                      years.
                    </p>
                  </div>
                </div>
                <div className="blog-btn">
                  <a
                    href="https://open.spotify.com/episode/4bsiOTn5VFHW3o6gpG7x7t"
                    target="_blank"
                  >
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div
            className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <a
              className="btn confer-btn-white"
              href="/episodes"
              target="_blank"
            >
              View all <i className="zmdi zmdi-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;
