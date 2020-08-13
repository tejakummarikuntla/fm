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
                      src="https://open.spotify.com/embed-podcast/episode/3ov9iobaiesvLyUw6Ya90f"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a class="blog-title" href="/episodes/ep_8" target="_blank">
                      Unicast: On Hiking Your On Hike
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> Aug 10, 2020
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
                      On this Unicast, I’ve shared one of the most powerful
                      sayings on the “Pacific Crest Trail” it’s called “Hike
                      your own Hike”, this is a phenomenon and a basic concept
                      among hikers, explorers, and travelers
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_8" target="_blank">
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
                      src="https://open.spotify.com/embed-podcast/episode/0HGH27BNoMu0X0lWewgANt"
                      width="100%"
                      height="232"
                      frameborder="0"
                      allowtransparency="true"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  <div class="single-blog-text text-center">
                    <a class="blog-title" href="/episodes/ep_7" target="_blank">
                      Josh Starmer: On Founding StatQuest, and Pivoting Career
                      into YouTube | Self-employment
                    </a>
                    <div class="post-meta">
                      <a class="post-date">
                        <i class="zmdi zmdi-alarm-check"></i> August 3, 2020
                      </a>
                      <a
                        class="post-author"
                        href="https://www.linkedin.com/in/joshua-starmer-95a554130/"
                        target="_blank"
                      >
                        <i class="zmdi zmdi-account"></i> Josh Starmer
                      </a>
                    </div>
                    <p>
                      Josh Starmer is a passionate teacher who was a Genetics
                      researcher at the University of North Carolina, Chapel
                      Hill. These days Josh’s focus is on mathematic education
                      and he’s literally revamping the way statistics have been
                      taught in academics.
                    </p>
                  </div>
                </div>
                <div class="blog-btn">
                  <a href="/episodes/ep_7" target="_blank">
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
