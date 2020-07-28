import React from "react";

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
            <div class="single-blog-area wow fadeInUp">
              <div class="card" data-wow-delay="300ms">
                <div class="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/30Mhriw4VzXkhOhsZqi6AB"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a class="blog-title" href="/episodes/ep_5" target="_blank">
                      Frank Kane: On How to Become a Successful Online
                      Instructor in Technology | Self Employment{" "}
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> July 20, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/frankkane/"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Frank Kane
                      </a>
                    </div>
                    <p class="card-text text-center">
                      I’m so grateful to sit with Frank Kane, Founder of Sundog
                      Education. Who’s deeply connected in the conversation and
                      vulnerably revealed his life exploits and experience on
                      making more than 1 million dollars with self-employment.
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_5" target="_blank">
                    <i class="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
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
                  <a href="/episodes/ep_4" target="_blank">
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
              href="/episodes/all"
              target="_self"
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
