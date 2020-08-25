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
                      src="https://open.spotify.com/embed-podcast/episode/4p0BkFGr4tuLWZ0Q7ERxH6"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a
                      class="blog-title"
                      href="/episodes/ep_10"
                      target="_blank"
                    >
                      Unicast: On Killing ANTs, Automatic Negative Thoughts
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> Aug 24, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/tejakummarikuntla/"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Teja Kummarikuntla
                      </a>
                    </div>
                    <p>
                      In this Unicast, I’ve shared a practical todo that could
                      transform and help you with Killing Automatic Negative
                      Thoughts using Spot, Stop, and Swap.
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_10" target="_blank">
                    <i class="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="single-blog-area wow fadeInUp">
              <div class="card" data-wow-delay="300ms">
                <div class="card-body" data-wow-delay="300ms">
                  <div id="Container">
                    <iframe
                      src="https://open.spotify.com/embed-podcast/episode/0A0n4MmmR7ybo30Pl5ZmLU"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a class="blog-title" href="/episodes/ep_9" target="_blank">
                      Michael Kennedy: On Building a Successful Podcast in
                      Technology | Self-employment
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> Aug 17, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/mkennedy/"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Michael Kennedy
                      </a>
                    </div>
                    <p>
                      What makes a few specific Podcasts impactful in
                      technology?, Michael Kenndy, Founder of Talk Python
                      Training and Host of the number one podcast in Python,
                      Talk Python me. Shared his personal and professional
                      exploits in life and technology that made “Talk Python To
                      Me“ reach millions. Michael spoke about how someone could
                      kickstart a Podcasting in technology and what it takes,
                      sharing his initial situations from quitting his job and
                      getting sponsorships made this conversion transformative.
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_9" target="_blank">
                    <i class="zmdi zmdi-long-arrow-right"></i>
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
