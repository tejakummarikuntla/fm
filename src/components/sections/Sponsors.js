import React from "react";

const Sponsor = () => {
  return (
    <section class="partner sponsor">
      <br />
      <div
        class="section-heading-2 text-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        <p>Brands Behind Us</p>
        <h4>Our Great Sponsers</h4>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="single-partner">
              <ul>
                <li>
                  <a href="https://manning.com" target="_blank">
                    {" "}
                    <img
                      style={{
                        borderRadius: "10px",
                      }}
                      src="../img/core-img/manning_logo.png"
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="https://www.guvi.io" target="_blank">
                    {" "}
                    <img
                      style={{ borderRadius: "10px" }}
                      src="../img/core-img/logo_guvi.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a href="/sponsor" class="btn-2">
        BECOME A SPONSOR
      </a>

      <br />
      <br />
    </section>
  );
};

export default Sponsor;
