import React from "react";

const sidebar_7 = () => {
  return (
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
      <div class="confer-sidebar-area mb-100">
        <div class="single-widget-area">
          <div class="post-author-widget">
            <div class="post-author-avatar">
              <img
                src="../img/Podcast/episodes/ep_9/guest/Michael.jpg"
                alt=""
              />
            </div>

            <div class="post-author-content">
              <h5> Michael Kennedy</h5>
              <span>
                <a target="_blank" href="https://training.talkpython.fm/">
                  Founder,Tak Python Training
                </a>{" "}
              </span>

              <span>
                <a target="_blank" href="https://training.talkpython.fm/">
                  Host, Talk Python To Me Podcast
                </a>
              </span>
            </div>

            <div class="author-social-info">
              <a target="_balnk" href="https://twitter.com/mkennedy">
                <i class="zmdi zmdi-twitter"></i>
              </a>
              <a target="_balnk" href="https://www.linkedin.com/in/mkennedy/">
                <i class="zmdi zmdi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="single-widget-area">
          <h5 class="widget-title mb-30">Listen on:</h5>

          <ul class="tag-cloud">
            <li>
              <a target="_blank" href="">
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/episode/0A0n4MmmR7ybo30Pl5ZmLU"
              >
                Spotify
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                Apple Podcast
              </a>
            </li>
            <li>
              <a target="_blank" href="">
                Google Podcast
              </a>
            </li>
          </ul>
        </div>

        <div class="single-widget-area">
          <h5 class="widget-title mb-30">Categories</h5>

          <ul class="categories-list">
            <li>
              <a href="#">
                Technology <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                Startups <span></span>
              </a>
            </li>
            <li>
              <a href="#">
                Community <span></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar_7;
