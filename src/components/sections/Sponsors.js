import React from "react";

const Sponsors = () => {
  return (
    <div className="container" style={{ alignItems: "center" }}>
      <br />
      <br />
      <div className="container">
        <div class="row">
          <div class="col-12">
            <div
              class="section-heading-2 text-center wow fadeInUp"
              data-wow-delay="300ms"
            >
              <p>Supporters &amp; Sponsors</p>
              <h4>OFFICIAL SPONSOR</h4>
            </div>
          </div>
        </div>

        <div class="col-12" style={{ alignItems: "center" }}>
          <div class="our-sponsor-area d-flex flex-wrap">
            <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
              <a href="https://www.guvi.io" target="_blank">
                <img src="img/core-img/guvi.jpg" alt="" />
              </a>
            </div>
            <div class="single-sponsor wow fadeInUp" data-wow-delay="300ms">
              <a href="https://manning.com" target="_blank">
                <img
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                  }}
                  src="img/core-img/manningcopy.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
